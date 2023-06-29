"""
An example of how to use the CheapShark API for game deals

@author Sebastian Whyte
@date 05/30/2023
@version 1.0

"""

import json
import requests
import argparse
import sys


# WHAT I WANT THE APP TO DO:
#	- User should be able to view list of ALL DEALS from a specific store
#	- User should be able to enter title of game they want, and the result should show -> Thumbnail, Title, Cheapest Price, Store/Store ID
#	- (BONUS) User should be able to enter their email to receive alerts for price drops. They should be able to unsubscribe too (CRUD)


def read_cli_args():
	"""

	"""
	# Initialize argparse
	parser = argparse.ArgumentParser(prog='Rest API Example', 
									 description='Displays game deals from various shops.')

	# Add positonal arguments and help text for the CLI. 
	parser.add_argument("store_id", help="""id of the store to retrieve deals/games from.\n
									1 = Steam, 2 = GamersGate, 3 = GreenManGaming, 4 = Amazon\n
									5 = GameStop, 6 = Direct2Drive, 7 = GoG, 8 = Origin\n
									11 = Humble Store, 13 = UPlay (Ubisoft), 15 = Fanantical, 18 = SilaGames\n
									21 = WinGameStore, 23 = GameBillet, 24 = Voidu""", 
									type=int)
	parser.add_argument("upper_price", help="maximum price you'd be willing to spend.", type=float)

	return parser.parse_args()




def build_store_deals_url(base_endpoint_url: str, store_id: int, upper_price: int) -> str:
	"""
	Used GET Method to retrieve the list of deals from the store with the specified store id

	Parameters
	------------
	base_endpoint_url

	store_id

	upper_price
	"""

	url = (f"{base_endpoint_url}/deals?storeID={store_id}&upperPrice={upper_price}")

	return url



def get_all_deals_from_store(url: str, onSale=False):
	"""
	Retrieves all deals from a specified store. 
	
	Parameters
	------------
	store_deals_url 	url to search for deals from a specific store 
	onSale				optional argument which will only display games that are currently on sale
	"""

	response = requests.get(url)

	# DEBUG
	print(url)
	
	# Test status code output
	print(response)
	print(response.status_code)

	return response



def get_game_by_title(url: str):
	"""
	Returns list of games with titles similar to the given title
	"""

	response = requests.get(url)

	# DEBUG
	print(url)

	# Test status code output
	print(response)
	print(response.status_code)

	return response


def build_list_of_games_url(base_endpoint_url: str, title: str, exact=0) -> str:
	"""
	
	Parameters
	------------
	base_endpoint_url

	title

	steam_app_id (optional)

	exact	indicates whether to match the title exactly (0 for false, 1 for true)
	"""

	url = (f"{base_endpoint_url}/games?title={title}&limit=60&{exact}")

	return url



def set_price_alert(email: str, game_id: int, price: float) -> bool:
	"""
	Sets a price alert given a game ID, email, and price.

	Parameters
	------------
	email		email to enroll in price alerts
	game_id		id of the game to track
	price 		price to wait for (only required when using set)

	Returns
	------------
	True for valid email/gameID/price, otherwise false.
	"""

	pass




def delete_price_alert(email: str, game_id: int) -> bool:
	"""
	Deletes a price alert given a game ID, email, and price.

	Parameters
	------------
	email		email to enroll in price alerts
	game_id		id of the game to track
	price 		price to wait for 

	Returns
	------------
	True for valid email/gameID/, otherwise false.
	"""

	pass





if __name__ == '__main__':

	# Base endpoint URL for CheapShark
	BASE_ENDPOINT_URL = 'https://www.cheapshark.com/api/1.0'

	# Collect the positional arguments from the command line
	args = read_cli_args()

	# Assign the input from the positional arguments
	store_id = args.store_id
	upper_price = args.upper_price

	# DEBUG 
	print('Store ID: ', store_id)
	print('Upper Price: ', upper_price)

	# Prompt user
	#title = input('Enter title of game: ')



	#### SEPARATE EACH TASK INTO THEIR OWN RESPECTIVE FUNCTIONS VVV

	

	# - FOR SHOWING DEALS AT A SPECIFIC STORE BY USING THE STORE ID 
	url = build_store_deals_url(BASE_ENDPOINT_URL, store_id, upper_price)

	store_data = get_all_deals_from_store(url).json()

	#print(len(store_data))

	if len(store_data) > 0:
		for i in range(len(store_data)):
			print(f"""Title: {store_data[i].get('title')}, Game ID: {store_data[i].get('gameID')}, Sale Price: {store_data[i].get('salePrice')}, 
				  Normal Price: {store_data[i].get('normalPrice')}, Metacritic Score: {store_data[i].get('metacriticScore')}""")

	else:
		print(f"No results found from store ID: {store_id}.")

