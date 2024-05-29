// Implemented Functions Will To Get number From String

// Explane
//12hello  0*10+(49-48)=1
//12hello  1*10+(50-48)=12

#include<iostream>


using namespace std;

int parseInteger(string value){
    int result=0;
    for(char x :value){
        if(x>='0'&&x<='9') result=result*10+(x-'0'); 
        else break;
    }
   return result;
}

int main()
{
 
cout<<parseInteger("125hello")<<endl;
    return 0;
}
