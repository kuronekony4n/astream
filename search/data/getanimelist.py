# Run this for updating the anime.json
# change <end_num> for last pagination from gogoanime anime list page

import requests
import json
import time

url_template = "https://animoasa.glitch.me/animelist/{}"
start_num = 1
end_num = 91
animelist = []

for num in range(start_num, end_num + 1):
    url = url_template.format(num)
    print("Getting data for page ", num)
    response = requests.get(url)
    data = response.json()
    animelist.extend(data)

with open('anime.json', 'w') as f:
    json.dump(animelist, f)

with open('anime.json', 'r') as f:
    count = json.load(f)

num_objects = len(count)

print("Done! Saved as anime.json")
print("Total Anime:", num_objects)
time.sleep(1000)
