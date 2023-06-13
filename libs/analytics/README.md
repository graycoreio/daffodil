# Analytics Actions Mapping




**Before going deep down first we need to understand this technical term so Let's begin with the word *Analytics Action Mapping* so you can easily understand rest of the things.**




Analytics action mapping is a way to track what users do on a website or app. It involves defining specific actions that users can take, like clicking a button or viewing a page, and mapping them to analytics events. These events help website owners and developers understand how users behave, what they like or don't like, and how to improve the website or app. By using analytics action mapping, website owners and developers can get valuable insights into user behavior and make the website or app better for users.






## This is a list of different actions that can occur on an e-commerce website and how they can be used to analyze user behavior and improve the overall user experience.



### 1. VIEW_ITEM_LISTVIEW_ITEM_LIST 👀
This action indicates that a user has viewed a list of items, such as a category or search results page. It helps us understand user engagement with different sections of our website. 


   - `DaffCategoryLoadSuccess:`This action represents the successful loading of a category page, providing detailed information about the category. It allows us to track the performance and popularity of specific categories.

   - `DaffCategoryPageLoadSuccess:`This action denotes the successful loading of a category page, including relevant data and content. It helps us measure the effectiveness of category pages and identify any potential issues with page loading.

   - `DaffProductPageLoadSuccess (upsell/related):` This action signifies the successful loading of a product page, specifically for upsell or related items. It enables us to analyze the effectiveness of product recommendations and upselling strategies.



### 2. VIEW_ITEM 👀 
The VIEW_ITEM action indicates that a user has viewed a specific item, typically on a product page. It provides insights into which products are attracting user attention and can help in understanding user preferences.

   - `DaffProductPageLoadSuccess:` This action represents the successful loading of a product page, providing comprehensive information about the product. It allows us to track user engagement with product pages and identify any potential performance issues.



### 3. ADD_TO_CART 🛒 
When a user adds an item to their shopping cart, the ADD_TO_CART action is triggered. It helps us track the popularity of different products and measure user intent to make a purchase.

   - `DaffAddToCartSuccess:` This action represents the successful addition of an item to the cart. It allows us to monitor the success rate of adding items to the cart and identify any issues that may arise during the process.



### 4. REMOVE_FROM_CART 🛒 
If a user removes an item from their shopping cart, the REMOVE_FROM_CART action is triggered. It helps us understand user behavior and preferences, as well as identify any potential obstacles to completing a purchase.

   - `DaffRemoveFromCartSuccess:` This action represents the successful removal of an item from the cart. It enables us to track the success rate of removing items and evaluate the overall user experience with the cart management functionality.



### 5. VIEW_CART 👀 🛒 
The VIEW_CART action indicates that a user has viewed their shopping cart. It allows us to analyze user engagement with the cart and identify any potential barriers or distractions that may prevent users from proceeding to checkout.



### 6. RouterAction 🔨
The RouterAction represents a routing action within the application. It helps us track the navigation flow of users and identify any patterns or issues related to page transitions.



### 7. BEGIN_CHECKOUTS 🏁 
This action marks the start of the checkout process. It allows us to track the number of users initiating the checkout process and monitor their progression through the various stages.



### 8. ADD_SHIPPING_INFO :
When a user provides shipping information during the checkout process, the ADD_SHIPPING_INFO action is triggered. It helps us understand user preferences and streamline the shipping information collection process.

   - `DaffApplyShippingMethodSuccess:` This action represents the successful application of a shipping method during the checkout process. It allows us to track the effectiveness of our shipping options and ensure a smooth user experience.



### 9. ADD_PAYMENT_INFO 💸 
If a user provides payment information during the checkout process, the ADD_PAYMENT_INFO action is triggered. It helps us measure the completion rate of payment information entry and identify any potential issues with the payment gateway.

   - `DaffApplyPaymentMethodSuccessAction:` This action represents the successful application of a payment method during the checkout process. It enables us to track the success rate of payment method application and ensure a seamless payment experience for users.



### 10. PURCHASE : 
The PURCHASE action indicates that a user has successfully completed a purchase. It allows us to track the conversion rate and evaluate the overall effectiveness of our e-commerce platform.

   - `DaffPlaceOrderSuccessMessage:` This action represents a success message confirming the placement of an order. It enables us to track the order completion rate and measure the effectiveness of our order placement process.



### 11. PAGEVIEW: 
The PAGEVIEW action indicates that a page has been viewed. It helps us understand overall website traffic, user engagement, and popular sections of our website.

   - `DaffProductPageLoadSuccess:` This action represents the successful loading of a product page. It enables us to track user engagement with product pages and ensure optimal page loading performance.

   - `DaffCategoryPageLoadSuccess:` This action denotes the successful loading of a category page. It allows us to monitor the performance and loading speed of category pages, ensuring a smooth browsing experience for users.

### Note:
These detailed analytics actions provide valuable insights into user interactions, preferences, and the overall performance of our e-commerce website. By tracking these actions, we can identify areas for improvement, optimize the user experience, and ultimately drive better business results.
