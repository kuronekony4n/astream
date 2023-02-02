# Make sure you install termcolor and webbrowser
# pip install termcolor
# pip install webbrowser
# I made this using Python 3.9.6
# Web version : https://astream.pages.dev/
# by kuronekony4n

import requests
from termcolor import colored
import os
import webbrowser

def fetch_api_results(query):
    url = f"https://apiconsumet.vercel.app/anime/gogoanime/{query}?page=1"
    response = requests.get(url)
    return response.json()

def fetch_anime_info(anime_id):
    url = f"https://apiconsumet.vercel.app/anime/gogoanime/info/{anime_id}"
    response = requests.get(url)
    return response.json()

def fetch_episodes(episodes_id):
    url = f"https://apiconsumet.vercel.app/anime/gogoanime/servers/{episodes_id}"
    response = requests.get(url)
    return response.json()

def fetch_watch(eps_id):
    url = f"https://apiconsumet.vercel.app/anime/gogoanime/watch/{eps_id}"
    response = requests.get(url)
    return response.json()

os.system('cls')
print(colored("# ----- Astream by KuronekoNy4n ----- #", 'blue'))
user_input = input("Search Anime: ")
results = fetch_api_results(user_input)['results']
os.system('cls')
print(colored("# ----- Search Result ----- #", 'blue'))
for i, result in enumerate(results):
    print(colored(f"{i + 1}. ", "cyan"), end='')
    print(colored(f"{result['title']} ", "yellow"), end='')
    release_date = result['releaseDate']
    print(colored(f"({release_date.replace('Released: ', '')} - ", 'cyan'), end='')
    print(colored(f"{result['subOrDub'].upper()})", "cyan"))

while True:
    selected = input("[SEARCH] Enter a number (or q to quit): ")
    if selected == 'q': 
        break
    try:
        selected = int(selected)
        if selected > 0 and selected <= len(results):
            anime_id = results[selected - 1]['id']
            anime_info = fetch_anime_info(anime_id)
            episodes = anime_info['episodes']
            os.system('cls')
            print(colored("# ----- Anime Information ----- #", 'blue'))
            print(colored(f"Title: ", "cyan"), end='')
            print(colored(f"{anime_info['title']}", 'yellow'), end='')
            print(colored(f" [{anime_info['subOrDub'].upper()}]", 'cyan'))
            print(colored(f"Status: ", "cyan"), end='')
            print(colored(f"{anime_info['status']} - {anime_info['type']}", 'yellow'))
            print(colored(f"{anime_info['description']}", 'green'))
           
            while True:
                selected_eps = input(f"[INFO] Select episode of {anime_info['title']} 1-{anime_info['totalEpisodes']} (or q to quit): ")
                if selected_eps == 'q':
                    break
                try:
                    selected_eps = int(selected_eps)
                    if selected_eps > 0 and selected_eps <= len(episodes):
                        eps_id = episodes[selected_eps - 1]['id']
                        sources = fetch_watch(eps_id)['sources']
                        os.system('cls')
                        print(colored("# ----- Streaming Information ----- #", 'blue'))
                        for i, server in enumerate(sources):
                            print(colored(f"{i + 1}. ", "cyan"), end='')
                            print(colored(f"{server['quality']}", 'yellow'))
                            
                        selected_server = input("[STREAM] Enter the number of the server you want to stream: ")
                        try:
                            selected_server = int(selected_server)
                            if selected_server > 0 and selected_server <= len(sources):
                                mainurl = sources[selected_server - 1]["url"]
                                quality = sources[selected_server - 1]["quality"]
                                streamurl = "https://astream.pages.dev/player?url="
                                webbrowser.open(streamurl+mainurl)
                            else:
                                print(colored("Invalid input", 'red'))
                        except ValueError:
                            print(colored("Invalid input", 'red'))
                except ValueError:
                    print(colored("Invalid input", 'red'))
    except ValueError:
        print(colored("Invalid input", 'red'))