#include<iostream>


using namespace std;


// Implemented Functions Will To Get Maximum and Minimum number

// Get Maximum Number
int getMaximumNumber(int array[],int size){
    int maxNum=0;
    for(int i=0;i<size;i++){
        if(array[i]>maxNum) maxNum=array[i];
    }
    return maxNum;
}

// Get Minimum Number

int getMinimumNumber(int array[],int size){
    int miniNum=0;
    for(int i=0;i<size;i++){
        if(array[i]<miniNum) miniNum=array[i];
    }
    return miniNum;
}



int main()
{
 
  int array[]={20, 5,10 ,-8,30,15,-10};
 
  cout<<"The Maximum Number = "<<getMaximumNumber(array,7)<<endl;
  cout<<"The Minimum Number = "<<getMinimumNumber(array,7)<<endl;
 
    return 0;
}
