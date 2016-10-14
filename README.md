# junk-parser - Best-fit, low-RAM CSV Parser

I know, you're probably thinking "not another CSV/?SV parser."

> "None of them even work exactly like Excel 20xx anyway!?"

This is a different kind of parser. And a fun experiment. `#DealWithIt`.

It's optimized around a few assumptions - based on _observed common errors_.

> It does **localized adjustments** to **best-fit** rows to the **column count**.
It can also **adjust** columns **intelligently** based on **detected data types**.

This technique is biased towards data with more columns & more column types.
Even better if the types are in amix
_Errors in Tuple-, or Key-Value-Pair-shaped files (with only 2-3 columns) will probably not be handled desireably._

Example data - Has column row + 5 rows on 14 lines - IDs 100-104:

```
id,first,last,addr,job
100,John,Doe,666 Heck Hwy,Cat Herder
101,John,Doe,123 Main St.
Denver CO 80123,Cat Whisperer
102,John,Doe,Attn: Delivery
    123 Main St.
    Denver CO 80123,Cat Whisperer
103,John,Doe,Attn: Delivery
123 Main St., Denver, Co
80122
,Cat Whisperer
104,John,Doe,Attn: Delivery
123 Main St., Denver, Co
80122

,Cat Whisperer
```

### Currently Parses Broken

* handles 2-line row, extra line-break
* handles 2-line quoted row, xtra line-break
* handles 2 extra line-breaks
* handles 1 row on 4 lines, w/ "empty" line
* handles 2 row, 4 lines quoted w/ trailing delimiter

![image](https://cloud.githubusercontent.com/assets/397632/18941135/aeb3dd68-85cb-11e6-8c9c-708c356b098b.png)

