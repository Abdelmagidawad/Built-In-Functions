#include<iostream>
#include<string>
#include<algorithm>

using namespace std;

// Implemented Function Will Repeat The String
// value : The string that will be repeated
// repeatNum :The number of repeating

string stringRepeat(string value ,int repeatNum){
    string result;
    while(repeatNum--){
        if(repeatNum==0) result+=value;
        else result+=value+" ";
    }
    return result;
}

int main() {

  cout<<stringRepeat("Migo",5)<<endl;

    return 0;
}