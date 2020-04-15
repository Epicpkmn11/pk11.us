---
title: HBChecker
description: A python script that checks something (ex. A DSi's SD card) to see if specific files are missing or corrupted
repo: Epicpkmn11/HBChecker
permalink: /hbchecker
---

{:#download}
## Download:
[HBChecker.exe](https://github.com/Epicpkmn11/HBChecker/releases/latest){:.btn .btn-primary #exeDownload}
[HBChecker.py](https://github.com/Epicpkmn11/HBChecker/releases/latest){:.btn .btn-primary #pyDownload}
[HBCheckerItems.json](https://github.com/Epicpkmn11/HBChecker/releases/latest){:.btn .btn-primary #jsonDownload}
[AltHBCheckerItems.zip](https://github.com/Epicpkmn11/HBChecker/releases/latest){:.btn .btn-primary #altJsonDownload}
##### The latest release is [latest](https://github.com/Epicpkmn11/HBChecker/releases/latest/){:#relNum}

## It is currently tested for:
- HiyaCFW v1.3.2 (11/6/2018 update)
- TWiLight Menu++ v9.4.0

## To Run:
1. Place `HBChecker.py` or `HBChecker.exe` and `HBCheckerItems.json` on the <em>root</em> of your SD card
  - Windows: Run `HBChecker.exe` <span style="font-size: 60%">(Note: This may be falsely detected this as a virus, it is not, it's just a false positive)</span>
  - Linux/macOS/other: Run `HBChecker.py` using [Python](https://www.python.org){:target="_blank"} 2 or 3

2. With the default `HBCheckerItems.json` it will check for <em>HiyaCFW</em> and <em>TWiLight Menu++</em> <small>(But not for corruption of TWLMenu, see steps below)</small>

3. Make sure `HiyaCFW Main`, `HiyaCFW [your region]`, and `TWLMenu++` are found

4. If all are found and it tells you `No files were missing!` then you should be good to go!

5. If any weren't found, enter the corresponding number to manually check for it

## If you want to check TWiLight Menu++ files for corruption:
- Download `AltHBCheckerItems.zip`

- Remove `HBCheckerItem.json` from the same directory as `HBChecker.exe` / `HBChecker.py`

- Open `HBChecker.py` / `HBChecker.exe` and drag/drop `HBCheckerItems (TWLMenu CRC).json` onto it

- Make sure <code>TWLMenu++ <span id="twlVer">9.4.0</span></code> was found <small id="twlNotice"></small>

- If is was found and it tells you `No files were missing!` then you should be good to go!

- If it wasn't found, enter `1` to manually check for it

<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="/assets/js/releases.js"></script>
