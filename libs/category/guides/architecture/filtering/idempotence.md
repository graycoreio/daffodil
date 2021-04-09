# Idempotence
Daffodil applies filters "idempotently". That is to say, when you apply a filter operation multiple items, you get the same end result. 

The only exception to this rule is the ["toggle"](./#toggle-idempotence) function, as it is strictly impossible to be idempotent since it intentionally oscillates a state property from one value to another.

### Toggle Idempotence
Consider a an "Equal" filter, e.g. where you want to filter a set of products by a specific color (or set of colors). If you "apply" a "red" filter multiple times, you should wind up in the same place after applying the same filter over and over again. Yet, if you "toggle" the red filter, you actually expect multiple transitions of the state upon each call.
