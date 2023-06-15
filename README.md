Text Encryptor
This web application allows you to encrypt and decrypt text using a simple substitution algorithm. The following describes each function and how to use the application.

HTML
The HTML file contains the structure and visual elements of the application. Here are the text input elements, the encrypt and decrypt buttons, as well as the area for displaying the encrypted or decrypted result.

javascript
The JavaScript file contains the logic of the application, including the functions to encrypt and decrypt the entered text, as well as the functions to copy the result and change the display mode (dark mode).

encryptText(text): This function takes a text as a parameter and encrypts the text using a simple substitution algorithm. Replace the vowels "e", "i", "a", "o" and "u" with corresponding code words. Returns the encrypted text.

decryptText(text): This function receives an encrypted text as a parameter and decrypts it, replacing the encoded words with the original vowels. Returns the decrypted text.

copyText(): This function is responsible for copying the resulting text (encrypted or decrypted) to the clipboard. Select the content of the text field and run the copy command.

CSS
The CSS file contains the visual styles of the application. Defines the layout of elements such as the header, input and output text boxes, buttons, footer, and social media sidebar.

How to use the app
Enter text in the "Enter text" field.
Click the "Encrypt" button to encrypt the text or the "Decrypt" button to decrypt the text.
The encrypted or decrypted result will be displayed in the "Encrypted Message" or "Decrypted Message" text field respectively.
To copy the result to the clipboard, click the "Copy" button.
Optionally, dark mode can be turned on or off by clicking the mode switch.
Developed by Zury Martinez. All rights reserved © 2023

you can test the application on GITHUB PAGES at the following address or by scanning the QR code:

https://zuryophre.github.io/challenge-text-encryptor/

![QR code](/src/qrcode-generado.png)
