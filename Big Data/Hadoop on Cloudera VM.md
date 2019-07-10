# Hadoop on Clouder VM

## Requirements

**Virtual Machine**
YOu can use Virtual Box or VMware. Both are free and you can choose based on preference.
I used VMware Player.

**Cloudera Hadoop VM**
Download the Cloudera VM from their website and install to your VM.
https://www.cloudera.com/downloads/quickstart_vms/5-13.html

## Hadoop Commands

`hadoop fs -copyFromLocal [file]`

- copy file from local to hadoop file system

`hadoop fs -ls`

- list files in the hadoop

`hadoop fs -ls [file]`

- opens `file`

`hadoop fs -cp [filename1] [filename2]`

- copies `filename1` to a new file named `filename2`

`hadoop fs -copyToLocal [file]`

- copy file from hadoop file system to local

`hadoop fs -rm [filename]`

- deletes file from hadoop file system

## Running MapReduce from hadoop-exampls jar

jar location: /usr/lib/hadoop-0.20-mapreduce

`hadoop jar /usr/lib/hadoop-0.20-mapreduce/hadoop-examples.jar wordcount [in file] [out file]`

- does `wordcount` in `in file` then outputs `out file` folder

`hadoop fs -ls out`

- opens `out` folder
- gives out two files: `SUCCESS` and `out/part-r-00000`

`hadoop fs -copyToLocal out/part-r-00000 local.txt`

- copies `out/part-r-00000` to local with filename, `local.txt`

`more local.txt`

- opens `local.txt` in terminal

## Resource

Big Data Specialization - UC San Diego
https://www.coursera.org/specializations/big-data