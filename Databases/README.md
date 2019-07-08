#What is a database
A system that allows everyone to share, manage, and use data.

- consider security and permissions in designing
- backups and recovery mechanisms

##Types of Databases
1. Hierarchical Data Model - Tree-like relationship between data
2. Network Data Model - Data have overlapping relationships with each other
3. Relational Data Model - Data in concept of table
4. NoSQL - non-relational, distributed, open-source, horizontally scallable

Heirarchical and Network Data Models requires managing data by keeping a physical location and order of data in mind. Flexible and high-speed search of data is difficult.

##What is a Relational Database?
It uses a structure that allows us to identify and access data in relation to another piece of data in the database.
- organized into tables
- not designed to cope with scale and agility of modern applications

(Table.png)

Table - set of data elements
Record - a piece of data in a files
Field - each item in a record
Row - one piece of data
Column - each field

Primary Key - Most important field
Unique Value - Value that cannot be repeated
Null - Absence of value

### Key Types
Key
Primary
Foreign
Composit
Natural
Surrogate
Candidate
Compound

###Designing a SQL Database
1. Determine the purpose of the database
2. Determine the tables needed
3. Identigy needed fields
4. Identify exclusive fields
5. Determine relations between tables
6. Define constraints to preserve data integrity (do not forget normalization)

Analysis Models
1. E-R Model
2. Normalization

##SQL (Structured Query Language)
It allows communication with the databse. Commands vary depending on the Database Management System/SQL Server used.

###Schema
- sets the rules for how tables are related to each other
- this relational model keeps the integrity of the references between tables
- Schema has to be defined before adding data to the database, to keep data consistent
  - to add a new column to a table, you have to update the schema
- responsible for the data type of each column
- puts a a lot of restrictions on the scalability of the database
- since tables are all related and the data entered has to conform to the database schema, moe expensive to scale up


- Each table has rows and columns
- Each column in a row has its own data-type and primary key

##Commands
1. Data Definition Langugae (DDL) - related to data structure
  - Create
  - Drop
  - Alter
2. Data Manipulation Language (DML) - related to stored data
  - Select
  - Insert
  - Update
  - Delete
3. Data Control Language (DCL) - manages user access

##What is NoSQL

- distributed computing systems
- higher scalability 
- reduced costs
- flexible schema design
- proess unstructured and semi-structed data
- no complex relationship
- open-sourced

- represents datavases that are non-relational 
- uses different data models such as search, graph, and document
- mainly used when there is a lot of unstructured data that needs to be used somehow or a lot of data to query quickly

- don't use normalizd data model
- do not use SQL query language

### Terminologies
1. Node - networked computer that offers some kind of service, local sotrage and access to a larger distributed system or file store
2. Cluster - set of nodes
3. Sharding/Horizontal Partitioning - partitioning the database on teh value of some field
4. Replication - portion of data are written to multiple nodes in case one of them fails (ensuring availability)
5. ACID - Atomicity, Consistency, Isolatoin, Durability - set of properties of database transactions intended to guarantee validity even in the event of erroes, power failures, etc
6. BASE - Basically Available, Soft-state, and Eventually consistent. - no 24/7 availability, database maybe consistent but eventually will be.

### Advantages
1. Elastic Scalabitliy - designed for use with low-cost commodity hardware
2. Big Data Applications - Massive volumes of data are easily handled
3. Economy - can be easily installed in cheap commodity hardware clusters as transactions and data volumes increase. Can process and store more data at much less cost
4. Dynamic Schemas - No schemas needed to start, but now a characteristic of every NoSQL database and could be a disadvantage if data isnt organized properly. Every data quality control must be done on the application. 
5. Auto-sharding - Natively and automatically spread data across an arbitrary number of servers, without requiring the application to even be aware of the composition of the server pool.
6. Replicatoin - Automatic database replication to maintain availability in the event of outages or planned maintenance events.
7. Integrated caching - keeps frequently-used data in system meory as mych as possible and removing the need for a separate caching layer.

### Disadvantages 
1. Doesn't have reliability functions, doesnt supprt ACID. But offers consistency in performance and scalability
2. Increases complexity for ACID development. Reduces the number of safe applications that commit transactions (bank systems)
3. NoSQL is not compatible at all with SQL. Requires a manual query language, making things slower and more complex.
4. Less stable and may have a lot less functionalities vs SQL.

###The CAP Theorem

###Types of NoSQL Databases
1. Key-value
- simplest
- every single item in the database is stored as an attribute name/key, together with its value, similar to a dictionary

Features
- Scalability: Large amounts of data and users.
- Speed: Large number of queries.
- Data model: Key-value pairs.
- Consistency.
- Transactions.
- Querying ability.
- Scalability.

Operations
- get(key): Get a value given a key.
- put(key, value): Create/Update a value given a key.
- delete(key): Deletes a value given a key.
- execute(key): Invoke an operation to a value.

Limitations
- No relationships among Multiple-Data.
- Multi-operation Transactions: If you are storing many keys and there is a failure to save one of the keys, you can’t roll back the rest of the operations.
- Query Data by 'value': Searching the 'keys' based on some info found in the 'value' part of the key-value pairs.
- Operation by groups: As operations are confined to one key at a time, there exists no way to run several keys simultaneously.

Real life examples
Key-Value would be best-fit to store user profile:
- userId, username.
 additional attributes/preferences:
  - Language
  - Country
  - Timezone
  - User favorites
  and so on

Key-value databases
- DynamoDB
- Riak
- Berkeley DB
- Redis
- Voldemort

2. Document
- stores each key with a complex data structure known as a document that can contain many different key-value pairs, or key-array pairs, or even nested documents
- treated as wholesome and splitting a document into its constituent name/value pairs are avoided

Features
- Scalability: For more complex objects.
- Data model: Collection of documents.
- Similar to JSON and XML.
- Implements ACID transactions and adapt RDBMS characteristics.
- Allows indexing of documents based on its primary identifier and properties.
- Supports Query transactions (to an extent).
- Design pattern allows retrieving info in a single operation.
- Avoids performing joins within the application.

Operations
- Search by:
  - Field
  - Range
  - Regular Expression
- Queries: Can include Javascript functions.
- Indexing: Can be done on any field.

Types
- XML Databases
- JSON databases
  - MongoDB
  - CouchDB
  - OrientDB
  - DocumentDB

Data Modelling
- LEss deterministic compared to RDBMS
- Driven by nature of the queries to be executed, while in RDBMS it is driven by the kind of data to be stored.

Limitations
- Base info duplication across multiple documents
- Complicates design resulting in inconsistency.
  - Solution: Link multiple documents using document identifiers (resembles foreign key in RDBMS)

3. Graph
- an expressive structure with the collection of Nodes and relationships interlinking them, used to store information about networks of data such as social connections
- based on the mathematical theory of graphs
- store information about networks

Parts of a graph
1. Nodes - representation of entities.
2. Properties - Information about nodes. Can be indexed.
3. Edges - Relationships between nodes. Can be indexed. Unidirectional or bidirectional, no limit of edges.

Understanding Graph Theory
According to Graph theory, the major constituents of a graph include:
- Vertices or Nodes representing distinct objects.
- Edges or Relationships or arcs establishing connectivity among these objects.
- Both Nodes and Relationships carry some properties.
  - Properties of Nodes are similar to those of relational table/JSON document.
  - Properties of Relationship considers the type, strength, or history of the relationship.

Graph theory assigns mathematical notation for
- Adding/removing nodes or relationships from graph
- Performing operations to trace adjacent nodes.

Core Rule - 'No broken links': A relationship should always have a start and end node. Deletion of a node is not possible without deleting its associated relationships.

Types
At a very high level, Graph store can be categorized into two kinds:
1. Graph Database - (Real-time)
- Performs transactional online graph persistence in real-time.
- Similar to online transactional processing (OLTP) databases in RDBMS area.
2. Graph Compute Engine - (Batch Mode)
- Performs offline graph analytics in batch as series of steps.
- Similar to online analytical processing (OLAP) for analysis of data in bulk, such as data mining.

Features
- Scales to the complexity of data.
- Focus on interconnectivity.
- Many query languages.

Operations
Will depend on it’s query language. For example, Neoj4 uses Cypher Query Language.

Limitations
- Lack of high performance concurrency: In many cases, Graph Databases provide multiple reader and single writer type of transactions, which hinders their concurrency and performance as a consequence, somewhat limiting the threaded parallelism.
- Lack of standard languages: The lack of a well established and standard declarative language is being a problem nowadays. Neo4j is proposing Cypher and Oracle is working on a language.
- Lack of parallelism: One important issue is the fact that partitioning a graph is a problem. Thus, most do not provide shared nothing parallel queries on very large graphs. Thus, allowing for parallelism is intrinsically a problem.

Real life examples
Graph Store is used to model all kind of different scenarios such as:
- Construction of a space rocket.
- Transportation system (roads and trains).
- Supply-chain and Logistics.
- Medical history.
- Fraud Detection.
- Network and IT Operations.

Graph databases
- Neo4J
- Giraph.

4. Columnar/Wide-column
- optimized for queries over large datasets, which are stored on a column-family basis
- uses a concept called keyspace, kind of like a schema in the relational model. It contans all the column families, which contain rows, which contain columns.
- tables are a set of columns, each of which may or may not contain a value for a particular row key

Features
- Compression: Column stores are very efficient at data compression and/or partitioning.
- Aggregation queries: Due to their structure, columnar databases perform particularly well with aggregation queries (such as SUM, COUNT, AVG, etc).
- Scalability: Columnar databases are very scalable. They are well suited to massively parallel processing, which involves having data spread across a large cluster of machines – often thousands of machines.
- Fast to load and query: Columnar stores can be loaded extremely fast. A billion row table could be loaded within a few seconds.
- These are just some of the benefits that make columnar databases a popular choice for organizations dealing with big data.

Operations
- Operations and some features vary wildly depending on the Management System you use.

Limitations
- Incremental data loading: It takes more time writing data than reading. Online Transaction Processing (OLTP) usage.
- Queries against only a few rows: Reading specific data takes more time than intended.
Real life examples
- A column family for vegetables of a supermarket.
- A column family for clients.
- A column family for users.

Columnar databases
- Cassandra
- HBase
- Kudu

##Key Differences between SQL and NoSQL databases

SQL | 	NoSQL
--- | ---
Relational database | 	Non-relational database
Rigid, predefined schema that needs to be updated for new columns | Super flexible schema that can be updated on the fly
Scaling requires better hardware or read-only copies of the database	| Scaling can be done by breaking up the database and putting it on separate servers
Data will remain consistent because of schema rules and restrictions | Data will be able to take on any form it needs to
Has the data model that sets up tables, rows, and columns	| Has multiple data models with different uses like document and search
Speed and efficiency is limited by the schema	| Fast and efficient but data could have many inconsistencies

Feature | NoSQL | Relational DBs
--- | --- | ---
Performance | high | low
Reliability | poor | good
Availability | good || good
Consistency | poor | good
Data Storage | optimized for huge dta | medium sized to large
Scalability | high | high (but more expensive)
*does not include any management system . It includes their own techniques to sort this problem and also improve performance and reliability


###Designing a NoSQL Database

###Choosing the right NoSQL database
1. Know the purpose to which you want to put the data
  - NoSQL databases vary in architecture and function
    - Key-value stores are best for persisten sharing of data by multiple processes or microservices in an application
    - Graph database might be the better choise if you plan to do deep relationship analysis for proximity calculation, fraud detection, or evaluation fo associativestructure
    - Wide Column store is good if you need to collect data very rapidly and at high volumes for analytics. It also tend also to offer document and graph support as well.
2. Do not assume your initial project is the only usage model that your will apply to the database.
  - might start doing state or sesion data management, then do transaction processing, and still do some analytics
3. For the near term, the focus should be around performance, scale, security, support for various workloads (transactional, operational, and analytics), integration with existing ecosystems, administration effort, cloud support, and type of use cases sypported.
  - NoSQL databases that have security certifications should be given higher consideration.
  - Not all NoSQL  databases can scale well. 
  - NoSQL offers different consistency levels in the scale-out model, so look at solutions that meed your specific requirements.
  

##Sources
- https://dev.to/lmolivera/everything-you-need-to-know-about-relational-databases-3ejl

https://dev.to/lmolivera/everything-you-need-to-know-about-nosql-databases-3o3h

https://kkovacs.eu/cassandra-vs-mongodb-vs-couchdb-vs-redis

https://www.mongodb.com/scale/types-of-nosql-databases

https://dev.to/kenwalger/big-data-and-nosql-a-great-coupling-80p

https://dev.to/flippedcoding/differences-between-sql-and-nosql-databases-3ml4

https://www.infoworld.com/article/2617876/database-which-freaking-database-should-i-use.html?page=2

https://www.infoworld.com/article/3260184/how-to-choose-the-right-nosql-database.html

https://db-engines.com/en/ranking

https://blog.knoldus.com/is-apache-cassandra-really-the-database-you-need/
