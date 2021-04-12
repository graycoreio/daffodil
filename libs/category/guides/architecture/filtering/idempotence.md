# Idempotence
Daffodil applies filters "idempotently". That is to say, when you apply a filter operation multiple times, you are guaranteed the same end result. 

The only exception to this rule is a toggle action, as it is strictly impossible for such an action to be idempotent since it intentionally oscillates a state property from one value to another.
