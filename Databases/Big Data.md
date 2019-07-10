#Big Data
Any quantity of data which is too large or complex that traditional computing power is inadequate to deal with.

## 4 V's - Four Common Dimensions of Big Data
1. Volume
  - size and scale of data
    - 1 TB - breakpoint 
2. Variety
  - diversity of data in different forms
3. Velocity
  - speed at which data is collected and needs to be processed
4. Veracity
  - quality of the data, accuracy, storing and retrieval

#NoSQL vs SQL
- vareity of data becomes problematic in relational data model
  - requires multiple tables and many joins to the process
- scalability is a challege of SQL
  - SQL are mostly designed around master-slave architecture which often comes as a a bottleneck
- NoSQL can scale with a multi-master and sharded architecture
  - allows horizontal scaling and adds to veracity 

##Relational databses for (conventional) data analytics
- uses metadata, providing data source, data collection methods and meaning
- tabular structure keeps data well organized, accessible, and relatively easy for people to view and understand
- the exact kind and quantity of data is always known

##Why are NoSQL databases important for Big Data analytics
- Big data is difficult or impossible to manage iwth relational databases

###Concerns
- data has little, or inconsistent structure
- data must be distributed across more than one machine
- speed is more important than accuracy
- applicaiton requires data types or analysis methods that common databases handle poorly

#Big Data Analytics Applications
1. Content Store/Repository
  - large, complex data formats (video, audio)
2. Document Store
  - semi-structured data (registration forms, business correspondence, journal articles)
3. Event Store
  - tracking events in real time
4. Graph
  - finding connections among people and things
5. Key Value
  - associative array, data structure, dictionary, hash
  - simple structure, flexibility, scalability
6. Multivalue 
  - NF2, non-first normal form systems
  - complex data structures with schemas similar to relational databaase model
7. Navigational
  - hierarchical (one to many)
  - network (many to many)
8. Object Oriented
  - model data as objects, similar to object-oriented programming
9. RDF Store
  - Resource Description Framework, Semantic Graph Databases, Triple Stores
  - information processing in applications that connect multiple data sources
10. Search Engine
  - finding information in documents
11. Times Series
  - time series data
12. Wide Column Store
  - column families, columnar databases, column-oriented DBMS
  - scalability, distributed systems
13. XML
  - Native XML database/DBMS
  - data in XML format or varied complex formates like audio or video


## Netflix's NoSQL Adoption (2011)
- Netflix moved into the cloud
- Goal: to build fast, fault tolerant systems at Internet scale
- Referncing Eric Brewer's CAP theorem, high availability (better customer experience) usually trumps strong consistency
  - There is little room for vertical scalability or single points of failure
  - Choice of 3 NoSQL: SimpleDB, Hadoop/HBase, Cassandra

###TLDR
One is best suited for a specific set if use cases
HBase - naturally integrated with the Hadoop platform
Cassandra - best for cross-regional deployments and scaling with no single points of failure

###Amazon SimpleDB
- Netflix moved into AWS cloud
- highly durable, write automatically replicated across availability zones within a region
- handy query and dataformat features - multiple attributes per row key, batch operations, consistent reads
- hosted solution

###Apache HBase
- convenient, high-performance column-oriented distributed database solution
- dynamic partitioning model
- easy to grow your cluster and re distribute load across nodes at runtime - great for managing growing data volume needs and avoiding hot spots
- built-in support for data compression, range queries spanning multiple nodes, and even native support for distributed counters make it an alternative
- strong consistency model but availability trade offs

###Cassandra
- open source NoSQL that is about flexibility, scalability, and performance
- provided by DataStax
- similar to HBase
- can scale horizontally and dynamically by adding more servers, without the need to re-shard - or reboot
- seeks to avoid verticall scalability limits and bottlenecks 
- no dedicated name nods (all cluster nodes can serve as such)
- no practical architectural limitations on data sizes, row/column coutns
- performance is strong, especially for thewrite throughput
- extremely flexible data model
- the sparse two-dimensional "super-column family" architecture allows for rich data model representations (and better performance) beyond jus a simple key-value lok up
- no underlying storage format requirements (like HDFS) - all you need is a file system
- uniquely flexible consistency and replication models
- applications can determin at call level what consistency level to use for reads and writes (single, quorum or all replicas)
- well suited for cross-datacenter and cross-regional deployments,
- customizatlbe replication factor
- special support to determine which cluster nodes to designate as replicas
- a single global Cassandra cluster can simultaneously service applications ana asynchronously replicate data across multiple geographic locations

###Final Adoption: Cassandra
Netflix initially migrated data from Oracle to Amazon's SimpleDB distributed database -- and eventually moved that data to Cassandra.
- can create a Cassandra Cluster in any region of the world in 10 minutes
- Downtime due to schema changes is no long er required
Today, Cassandra is the preferred database for almost all database needs at Netflix. The company stores 95 percent of all its data in Cassandra, including customer account information, movie ratings, movie metadata, movie bookmarks, and logs.




https://dev.to/kenwalger/big-data-and-nosql-a-great-coupling-80p

https://www.forbes.com/sites/metabrown/2018/03/31/get-to-know-relational-and-nosql-databases-that-power-big-data-analytics/#13e5854c1943

https://medium.com/netflix-techblog/nosql-at-netflix-e937b660b4c

https://readwrite.com/2011/01/28/how-netflix-adopted-nosql/

https://www.infoworld.com/article/2614318/big-movies--big-data--netflix-embraces-nosql-in-the-cloud.html?page=2

