#include<iostream>


using namespace std;

// Implemented Functions Will To test Not A Number Yes or No
// Is Not A Number => isNaN=>"12AE25"

bool isNaN(string value){
    for(char c : value){
        if(c<'0'||c>'9') return true;
    }
    return false;
}

int main()
{
    
 if(isNaN("12AB45")) cout<<"Yes Is Not A Number"<<endl;
 else cout<<"No Is Not A Number"<<endl;

    return 0;
}
