#include<bits/stdc++.h>
using namespace std;
int minJumps(int arr[], int n){
    // Your code here
    int i=0;
    int count=0;
    while(i<n-1 && count!=-1)
    {
        int i1=0;
        int max=i+arr[i];
        if(arr[i]==0)
        {
            count=-1;
        }
        else if(arr[0]>=n-1)
        {
            i=n;
            max=n;
        }
        else
        {
            count++;
            int k=arr[i]+i;
            cout<<"value of a[i] is "<<arr[i]<<endl;
            if(k>n-1)
            {
                k=n-1;
            }
            cout<<"value of j is "<<i+1<<" and value of k is "<<k<<endl;
            for(int j=i+1;j<=k;j++)
            {
                if(arr[j]+j>max)
                {
                    max=arr[j]+j;
                    i1=j;
                }
            }
            cout<<"value of count is "<<count<<" max value is "<<max<<endl;
        }
        i=i1;
    }
    return count;
}
int main()
{
	int n=10;
	int arr[n]={2,3,1,1,2,4,2,0,1,1};
	int x=minJumps(arr,n);
	cout<<x<<endl;
	return 0;
}
