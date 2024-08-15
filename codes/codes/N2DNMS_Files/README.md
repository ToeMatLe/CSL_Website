# Readme


## Parity Check File Format 

We use **Chinn** formation to record parity check matrix information, the format of text files is :

* line 1: the number of variable nodes 
* line 2: the number of check nodes
* line 3: the number of total edges
* line 4: maximum variable node degree 
* line 5: maximum check node degree
* variable node index ---  degree of corresponding variable node
* check node index ---- degree of  corresponding check node
* variable node --- (connected with) --- check node index 

Please note that the index starts from 0.

 

## Multiplicative Weights for NNMS and N2DNMS decoders 

### N-NMS (Type - 0 )

- Line 1: maximum decoding iteration (I_T) [For hybrid version, this is I_T-I']
- Line 2-end: Each line is one decoding itderation. In each iteration, it gives the weight of each edge in that iteration. The index of edges are ordered column by column.

### N-2D-NMS (Type-1) 

- Line 1: maximum decoding iteration (I_T) [For hybrid version, this is I_T-I']
- Line 2-end: Each line is one decoding itderation. In each iteration, it gives the weight of each possible (deg(c),deg(v)) in that iteration. Each row has |max_check_deg|*|max_vari_deg| columns. The weight with check deg =i, variable deg. =j is given by *((j-1)x|max_check_deg|+i)*th column

### N-2D-NMS (Type-2, 3, 4)

- Line 1: maximum decoding iteration (I_T) [For hybrid version, this is I_T-I']
- Line 2 --- line (I_T+1): Each line is one decoding itderation. In each iteration, it gives the weight of each possible (deg(c)) in that iteration. Each row has |max_check_deg| columns. The weight with check deg =i is given by  column i;
- Line (I_T+3)  --- line (2xI_T+2): Each line is one decoding itderation. In each iteration, it gives the weight of each possible (deg(v)) in that iteration. Each row has |max_vari_deg| columns. The weight with vari deg = j is given by  column j;

### N-2D-NMS (Type-5) 

- Line 1: maximum decoding iteration (I_T) [For hybrid version, this is I_T-I']
- Line 2-end: Each line is one decoding itderation. In each iteration, it gives the weight of each possible (i,j) in that iteration, where i represents i^{th} row  and j represents j^{th} column in the protomatrix. Each row has |I|*|J| columns.  The weight with proto_row=i, photo_col =j is given by *((j-1)x|I|+i)*th column, where I is the number of rows in the protomatrix, and J is the number of columns in the protomatrix.

### N-2D-NMS (Type-6,7)

- Line 1: maximum decoding iteration (I_T) [For hybrid version, this is I_T-I']
- Line 2 --- line (I_T+1): Each line is one decoding itderation. In each iteration, it gives the weight of each proto_row *i* in that iteration. Each row has |I| columns. The weight of proto_row =i is given by  column i;
- Line (I_T+3)  --- line (2xI_T+2): Each line is one decoding itderation. In each iteration, it gives the weight of each photo_column *j* in that iteration. Each row has |J| columns. The weight with photo_column j is given by  column j;

### N-NMS-T (Type-8) 

- Line 1: maximum decoding iteration (I_T) [For hybrid version, this is I_T-I']
- Line 2-end: Each line is one decoding itderation. In each iteration, it gives the weight in that iteration.

---

# Note

1. If the file name is **FNNMS**, it means the decoder is flooding scheduled.
2. If the file name is **LNNMS**,  it means the decoder is layered scheduled.

