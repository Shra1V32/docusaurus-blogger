---
sidebar_position: 5
---
# Running the scripts
+ Clone this to your directory using ```git clone https://github.com/ForceGT/TSPrivateAPI``` or download the `zip` file and then go inside the `code_samples` directory and open your terminal there
+ Change to the ```code_samples``` directory by using  ```cd code_samples```
+ Simply run ```main.py``` (the main script) using the following code
```python
    python main.py
```
+ You will get options to login using the different methods, upon successful login a ```userDetails.json``` file is created which contains important details of the user. The ```accessToken``` has to be updated from time to time. To do so run the login logic again. If you delete the ```userDetails.json``` file you will have to login again so please be careful 

+ You can generate m3u file by selecting option 3. This generates ```allChannelPlaylist.m3u``` file in the current directory.**NOTE: Please run this only after logging in using Step 1 or 2 otherwise the script exits with an error**

+ You need to login just once usually, it will create a `userDetails.json` file once you login, and then you can just regenerate the playlist each day when you would like to use it. If you don't see the `userDetails.json` file anywhere, then you may have to login again
