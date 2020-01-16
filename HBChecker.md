---
title: HBChecker
description: A python script that checks something (ex. A DSi's SD card) to see if specific files are missing or corrupted
---

{:#download}
## Download:
[HBChecker.exe](https://github.com/Epicpkmn11/HBChecker/releases/latest){:.btn #exeDownload}
[HBChecker.py](https://github.com/Epicpkmn11/HBChecker/releases/latest){:.btn #pyDownload}
[HBCheckerItems.json](https://github.com/Epicpkmn11/HBChecker/releases/latest){:.btn #jsonDownload}
[AltHBCheckerItems.zip](https://github.com/Epicpkmn11/HBChecker/releases/latest){:.btn #altJsonDownload}
##### The latest release is [latest](https://github.com/Epicpkmn11/HBChecker/releases/latest/){:#relNum}

## It is currently tested for:
- HiyaCFW v1.3.2 (11/6/2018 update)
- TWiLight Menu++ v9.4.0

## To Run:

1. Place <a href="#downloads">`HBChecker.py`</a> or <a href="#downloads">`HBChecker.exe`</a> and <a href="#downloads">`HBCheckerItems.json`</a> on the <em>root</em> of your SD card
  - Windows: Run <a href="#downloads">`HBChecker.exe`</a> <span style="font-size: 60%">(Note: This may be falsely detected this as a virus, it is not, it's just a false positive)</span>
  - Linux/macOS/other: Run <a href="#downloads">`HBChecker.py`</a> using <a href="https://www.python.org" class="link" target="_blank">Python</a> 2 or 3

2. With the default <a href="#downloads">`HBCheckerItems.json`</a> it will check for <em>HiyaCFW</em> and <em>TWiLight Menu++</em> <span style="font-size: 60%">(But not for corruption of TWLMenu, see <a class="link" href="#TWLCRC">steps below</a>)</span>

3. Make sure `HiyaCFW Main`, `HiyaCFW [your region]`, and `TWLMenu++` are found

4. If all are found and it tells you `No files were missing!` then you should be good to go!

5. If any weren't found, enter the corresponding number to manually check for it


## If you want to check TWiLight Menu++ files for corruption:
- Download <a href="#downloads">`AltHBCheckerItems.zip`</a>

- Remove `HBCheckerItem.json` from the same directory as `HBChecker.exe` / `HBChecker.py`

- Open `HBChecker.py` / `HBChecker.exe` and drag/drop `HBCheckerItems (TWLMenu CRC).json` onto it

- Make sure <code>TWLMenu++ <span id="twlVer">9.4.0</span></code> was found <small id="twlNotice"></small>

- If is was found and it tells you `No files were missing!` then you should be good to go!

- If it wasn't found, enter `1` to manually check for it

<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="/assets/js/releases.js"></script>
