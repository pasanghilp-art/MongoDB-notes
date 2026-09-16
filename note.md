PS C:\Users\Lenovo\Desktop\MongoDB-notes> mongoSh
Current Mongosh Log ID: 6aa97059f9f0c64ad791d242
Connecting to: mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.10.0
Using MongoDB: 8.3.11
Using Mongosh: 2.10.0

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

---

The server generated these startup warnings when booting
2026-09-15T11:29:41.803+05:45: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted

---

test> show dbs
admin 40.00 KiB
appdb 64.00 KiB
config 96.00 KiB
local 40.00 KiB
test> use appdb
switched to db appdb
appdb> db
appdb
appdb> show collections
users
appdb> db.users.find()
[
{ \_id: ObjectId('6aa8e9f2dde3fd95e793fb14'), name: 'djAlok' },
{
\_id: ObjectId('6aa96e4ca43307d878e6826e'),
name: 'Pasang Tamang',
age: 19,
address: { street: 'Ramhiti' },
hobbies: [ 'Running' ]
},
{ \_id: ObjectId('6aa96efaa43307d878e6826f'), name: 'Dho' },
{ \_id: ObjectId('6aa96efaa43307d878e68270'), name: 'mikey' }
]
appdb> db.users.insertOne({ name: "julian", hobby: "fighting"})
{
acknowledged: true,
insertedId: ObjectId('6aa97101f9f0c64ad791d243')
}
appdb> db.users.find()
[
{ \_id: ObjectId('6aa8e9f2dde3fd95e793fb14'), name: 'djAlok' },
{
\_id: ObjectId('6aa96e4ca43307d878e6826e'),
name: 'Pasang Tamang',
age: 19,
address: { street: 'Ramhiti' },
hobbies: [ 'Running' ]
},
{ \_id: ObjectId('6aa96efaa43307d878e6826f'), name: 'Dho' },
{ \_id: ObjectId('6aa96efaa43307d878e68270'), name: 'mikey' },
{
\_id: ObjectId('6aa97101f9f0c64ad791d243'),
name: 'julian',
hobby: 'fighting'
}
]
appdb> db.users.insertMany([{name: "melisa"}, {name: "fanny"}])
{
acknowledged: true,
insertedIds: {
'0': ObjectId('6aa97152f9f0c64ad791d244'),
'1': ObjectId('6aa97152f9f0c64ad791d245')
}
}
appdb> db.users.find()
[
{ \_id: ObjectId('6aa8e9f2dde3fd95e793fb14'), name: 'djAlok' },
{
\_id: ObjectId('6aa96e4ca43307d878e6826e'),
name: 'Pasang Tamang',
age: 19,
address: { street: 'Ramhiti' },
hobbies: [ 'Running' ]
},
{ \_id: ObjectId('6aa96efaa43307d878e6826f'), name: 'Dho' },
{ \_id: ObjectId('6aa96efaa43307d878e68270'), name: 'mikey' },
{
\_id: ObjectId('6aa97101f9f0c64ad791d243'),
name: 'julian',
hobby: 'fighting'
},
{ \_id: ObjectId('6aa97152f9f0c64ad791d244'), name: 'melisa' },
{ \_id: ObjectId('6aa97152f9f0c64ad791d245'), name: 'fanny' }
]
appdb> db.users.find().limit(2)
[
{ \_id: ObjectId('6aa8e9f2dde3fd95e793fb14'), name: 'djAlok' },
{
\_id: ObjectId('6aa96e4ca43307d878e6826e'),
name: 'Pasang Tamang',
age: 19,
address: { street: 'Ramhiti' },
hobbies: [ 'Running' ]
}
]
appdb> db.users.find().sort({ name:1}).limit(2)
[
{ \_id: ObjectId('6aa96efaa43307d878e6826f'), name: 'Dho' },
{
\_id: ObjectId('6aa96e4ca43307d878e6826e'),
name: 'Pasang Tamang',
age: 19,
address: { street: 'Ramhiti' },
hobbies: [ 'Running' ]
}
]
appdb> db.users.find().sort({name: -1}).limit(3)
[
{ _id: ObjectId('6aa96efaa43307d878e68270'), name: 'mikey' },
{ _id: ObjectId('6aa97152f9f0c64ad791d244'), name: 'melisa' },
{
_id: ObjectId('6aa97101f9f0c64ad791d243'),
name: 'julian',
hobby: 'fighting'
}
]
appdb> db.users.find().sort({ name: 1,age: 1}).limit(2)
[
{ \_id: ObjectId('6aa96efaa43307d878e6826f'), name: 'Dho' },
{
\_id: ObjectId('6aa96e4ca43307d878e6826e'),
name: 'Pasang Tamang',
age: 19,
address: { street: 'Ramhiti' },
hobbies: [ 'Running' ]
}
]
appdb> db.users.find().sort({ name: -1, age: -1 }).limit(2)
[
{ _id: ObjectId('6aa96efaa43307d878e68270'), name: 'mikey' },
{ _id: ObjectId('6aa97152f9f0c64ad791d244'), name: 'melisa' }
]
appdb> db.users.find().skip(2).limit(2)
[
{ _id: ObjectId('6aa96efaa43307d878e6826f'), name: 'Dho' },
{ _id: ObjectId('6aa96efaa43307d878e68270'), name: 'mikey' }
]
appdb> db.users.find({ name: {$eq: "Pasang Tamang"}})
[
  {
    _id: ObjectId('6aa96e4ca43307d878e6826e'),
    name: 'Pasang Tamang',
    age: 19,
    address: { street: 'Ramhiti' },
    hobbies: [ 'Running' ]
  }
]
appdb> db.users.find({ name: {$ne: "Pasang Tamang"}})
[
{ _id: ObjectId('6aa8e9f2dde3fd95e793fb14'), name: 'djAlok' },
{ _id: ObjectId('6aa96efaa43307d878e6826f'), name: 'Dho' },
{ _id: ObjectId('6aa96efaa43307d878e68270'), name: 'mikey' },
{
_id: ObjectId('6aa97101f9f0c64ad791d243'),
name: 'julian',
hobby: 'fighting'
},
{ _id: ObjectId('6aa97152f9f0c64ad791d244'), name: 'melisa' },
{ _id: ObjectId('6aa97152f9f0c64ad791d245'), name: 'fanny' }
]
appdb> db.users.find({ age: {$gt: 5}})
[
{
\_id: ObjectId('6aa96e4ca43307d878e6826e'),
name: 'Pasang Tamang',
age: 19,
address: { street: 'Ramhiti' },
hobbies: [ 'Running' ]
}
]
appdb> db.users.find({ age: {$exists: true}})
[
{
\_id: ObjectId('6aa96e4ca43307d878e6826e'),
name: 'Pasang Tamang',
age: 19,
address: { street: 'Ramhiti' },
hobbies: [ 'Running' ]
}
]
appdb> db.users.deleteOne({ name: "melisa"})
{ acknowledged: true, deletedCount: 1 }
appdb> db.users.find()
[
{ \_id: ObjectId('6aa8e9f2dde3fd95e793fb14'), name: 'djAlok' },
{
\_id: ObjectId('6aa96e4ca43307d878e6826e'),
name: 'pasang',
age: 22,
address: { street: 'Ramhiti' },
hobbies: [ 'Running' ]
},
{ \_id: ObjectId('6aa96efaa43307d878e6826f'), name: 'Dho' },
{ \_id: ObjectId('6aa96efaa43307d878e68270'), name: 'mikey' },
{
\_id: ObjectId('6aa97101f9f0c64ad791d243'),
name: 'julian',
hobby: 'fighting'
},
{ \_id: ObjectId('6aa97152f9f0c64ad791d245'), name: 'fanny' }
]
