# SupplyChat

A simple prototype chatbot that utilizes inventory data from retailers and relays information to users in the general community upon request. 


## Inspiration

In the presence of COVID-19, it is crucial for the general community to obtain essential supplies. SupplyChat allows them to check inventories of nearby retailers and optimizes the search time for required supplies. Through this simple chatbot, users can find the items they need as soon as possible, allowing them to meet their urgent needs in these dangerous times. 

## How It Works

A machine-learning model based on a stochastic gradient descent with Nesterov momentum trains the chatbot 20,000 times with the given inventory data. Using keras, all buttons on the GUI of the chatbot are backed by a specific function. Data has been acquired by the development team from a specific Bay Area pharmacy and is converted into a json file. After training the model and launching the GUI, the user can input names of essential items and the chatbot will parse through the data and relay the quantity of the item at the store. 

## Further Developments

We are looking to deploy this chatbot with firebase in the future to provide easy access to the public. As of now, we're finding ways to develop data acquisition methods to update the inventory data recurrently. Furthermore, we'll be looking into adding location services to allow users to find retailers nearby and to optimize their search time for essential supplies. 

## Contact

If you would like to collaborate with us on this project or have any inquiries, please contact Zeeshan Patel at zeeshanp@berkeley.edu. 


### Disclaimer

This chatbot utilizes machine learning techniques to provide a steady experience to the user. Please utilize Python 3.7.0 to use this chatbot as the latest versions of Python contain a bug that does not allow for proper function of the GUI. As this is a prototype, we are still working on developing data acquisition methods to provide users with the latest inventory data at retailers. If you would like to contribute to this project, especially on the data acquisition side, please contact Zeeshan Patel. (This project was entirely developed during CalHacks 2020.)
