#include<iostream>
using namespace std;
bool square_or_not(int a1,int b1,int a2,int b2,int a3,int b3,int a4,int b4){
	int x[6];
	x[0]=(a1-a2)*(a1-a2)+(b1-b2)*(b1-b2);
	x[1]=(a1-a3)*(a1-a3)+(b1-b3)*(b1-b3);
	x[2]=(a1-a4)*(a1-a4)+(b1-b4)*(b1-b4);
	x[3]=(a2-a3)*(a2-a3)+(b2-b3)*(b2-b3);
	x[4]=(a2-a4)*(a2-a4)+(b2-b4)*(b2-b4);
	x[5]=(a3-a4)*(a3-a4)+(b3-b4)*(b3-b4);
	int y=0;
	for(int i=0;i<6;i++){
		if(x[i]>y){
			y=x[i];
		}
	}
	int count=0;
	for(int i=0;i<6;i++){
		if(x[i]==y){
			count++;
		}
	}
	if(count==1){
		return false;
	}
	else{
		int d1=-1;
		int d2=-1;
		for(int i=0;i<6;i++){
			if(y==x[i] && d1==-1){
				d1=i;
			}
			else if(y==x[i]){
				d2=i;
			}
		}
		if(d1==0)
		{
			if((b1-b2)*(b3-b4)/((a1-a2)*(a3-a4))==-1){
				return true;
			}
		}
		else if(d1==1){
			if((b1-b3)*(b2-b4)/((a1-a3)*(a2-a4))==-1){
				return true;
			}
		}
		else if(d1==2){
			if((b1-b4)*(b2-b3)/((a1-a4)*(a2-a3))==-1){
				return true;
			}
		}
		else if(d1==3){
			if((b2-b3)*(b1-b4)/((a2-a3)*(a1-a4))==-1){
				return true;
			}
		}
		else if(d1==4){
			if((b2-b4)*(b1-b3)/((a2-a4)*(a1-a3))==-1){
				return true;
			}
		}
		else{
			if((b3-b4)*(b1-b2)/((a3-a4)*(a1-a2))==-1){
				return true;
			}
		}
	}
	return false;
}
int main(){
	int a1=0;
	int b1=0;
	int a2=1;
	int b2=1;
	int a3=1;
	int b3=0;
	int a4=0;
	int b4=1;
	cout<<"Four points construct the square : "<<square_or_not;
	return 0;
}
