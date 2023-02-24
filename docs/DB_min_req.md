# Base requirements

## Users
|Data  | Type |
|--|--|
|Name| Varchar (100)  |
|Email| Varchar (100)|
|Password|Varchar (100)|
|Tipo (Cliente/ADM)|TinyINT(1)|

## Categories
|Data  | Type |
|--|--|
|Name| Varchar (100)  |

## Products
|Data  | Type |
|--|--|
|Name| Varchar (100)  |
|Photo| Varchar (200)  |
|Price| Decimal(18,2)  |
|Description| Mediumtext |
|Category| **FK** INT|

## Purchase
|Data  | Type |Relationship|
|--|--|--|
|Purchase ID |**PK** INT|
|User|**FK** INT| N.1
|Chosen produdts "list"|**FK** INT|M.N
|Total value| Decimal(18,2)|

## PurchaseProducs
|Data  | Type |Relação|
|--|--|--|
|Product_id| INT| 1.M
|Purchase_id| INT| 1.N