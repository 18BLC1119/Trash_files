#include<iostream>
using namespace std;
int main()
{
	int y[]={94,88,71,75,71,68,73,57,59,65,67,60,60,45,61,50};
	int x[]={80,60,56,47,43,40,67,16,21,54,40,39,38,8,34,16};
	long long int sumx=0;
	long long int sumy=0;
	long long int sumxx=0;
	long long int sumyy=0;
	long long int sumxy=0;
	for(int i=0;i<16;i++)
	{
		sumx+=x[i];
		sumxx+=x[i]*x[i];
		sumy+=y[i];
		sumyy+=y[i]*y[i];
		sumxy+=x[i]*y[i];
	}
	cout<<sumx<<endl<<sumy<<endl<<sumxx<<endl<<sumyy<<endl<<sumxy<<endl;
	cout<<"hello world";
	return 0;
}
