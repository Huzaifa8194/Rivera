import requests
import json

# --- CONFIG ---
FIGMA_TOKEN = "figd_vnOdXbXWZKOJ9KcRTP7reDxjtVZ7KWUKYvKsDZtT"
FILE_KEY = "wXcyaOZWt47gDJYPO06WNm"
OUTPUT_FILE = "figma_file.json"

# --- REQUEST ---
url = f"https://api.figma.com/v1/files/{FILE_KEY}"
headers = {
    "X-Figma-Token": FIGMA_TOKEN,   # <- Figma accepts this header
    "Accept": "application/json"
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    data = response.json()
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"✅ JSON saved to {OUTPUT_FILE}")
else:
    print(f"❌ Error {response.status_code}: {response.text}")
