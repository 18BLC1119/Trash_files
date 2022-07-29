# -*- coding: utf-8 -*-
"""
Created on Thu Mar  4 10:19:44 2021

@author: Ashish Kumar
"""

import pandas as pd
data=pd.read_csv('water_dataX.csv',encoding= 'unicode_escape')
data1 = data.dropna()
print(data1.info)
print(data1)

print(data1.info)
for x in range(1991):
    if data1.iloc[x][2]=="ashish":
        data.drop(x,axis=0,inplace=True)
print(data)
data.to_csv('data.csv')

data1=data
for x in range(1230):
    if data1.iloc[x][0]=="ashish":
        data.drop(x,axis=0,inplace=True)
print(data)
data.to_csv('data.csv')

for x in range(1230):
    if data1.iloc[x][1]=="ashish":
        data.drop(x,axis=0,inplace=True)
print(data)
data.to_csv('data.csv')