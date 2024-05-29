#include<iostream>
#include<vector>


using namespace std;

// Implemented Functions Will To check  Number Exist in Array

bool in_Array(vector<int>array,int target){
    for(int i=0;i<array.size();i++){
        if(array[i]==target) return true;
    }
    return false;
}

int main()
{
    
    
 if(in_Array({1,2,3},3)) cout<<"Yes target exist in array"<<endl;
 else cout<<"No target exist in array"<<endl;

    return 0;
}
