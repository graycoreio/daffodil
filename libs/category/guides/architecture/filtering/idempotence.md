# Idempotence
Daffodil applies filters "idempotently". That is to say, when a filter operation is applied multiple times, the returned result is guaranteed the be the same. 

The only exception to this rule is a toggle action, as it is strictly impossible for such an action to be idempotent since it intentionally oscillates a state property from one value to another.
