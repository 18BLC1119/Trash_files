#include<bits/stdc++.h>
using namespace std;
void arraysort(int a[],int b[],int m,int n)
{
	int final_n=m+n;
	if(final_n%2!=0)
	{
		final_n+=1;
	}
	
	while(final_n!=1)
	{
		final_n=final_n/2;
		int i=0;
		int j=final_n;
		while(j<m+n)
		{
			if(j<m)
			{
				if(a[i]>a[j])
				{
					swap(a[i],a[j]);
				}
			}
			else if(j>=m && i<m)
			{
				if(a[i]>b[j-m])
				{
					swap(a[i],b[j-m]);
				}
			}
			else
			{
				if(b[i-m]>b[j-m])
				{
					swap(b[i-m],b[j-m]);
				}
			}
			i++;
			j++;
		}
	}
	int i=0;
	int j=1;
		while(j<m+n)
		{
			if(j<m)
			{
				if(a[i]>a[j])
				{
					swap(a[i],a[j]);
				}
			}
			else if(j>=m && i<m)
			{
				if(a[i]>b[j-m])
				{
					swap(a[i],b[j-m]);
				}
			}
			else
			{
				if(b[i-m]>b[j-m])
				{
					swap(b[i-m],b[j-m]);
				}
			}
			i++;
			j++;
		}
}
int main()
{
	int a[4]={1,3,5,7};
	int b[5]={0,2,6,8,9};
	int m=sizeof(a)/sizeof(int);
	int n=sizeof(b)/sizeof(int);
	arraysort(a,b,m,n);
	for(int i=0;i<m;i++)
	{
		cout<<a[i]<<endl;
	}
	for(int i=0;i<n;i++)
	{
		cout<<b[i]<<endl;
	}
	
	return 0;
}
