#include<iostream>
#include<string>
#include<cmath>
#include<iomanip>
#include<algorithm>
#include<stack>

using namespace std;

#define ll long long 

// Implemented Function Will Convert String to Array
// s : The string that will be converted


void convertStringToArray(string s) {
    char* arr = new char[s.size()];
    
    for (int i = 0; i <s.size(); i++)  arr[i] = s[i];
    for (int i = 0; i <s.size() ; i++) cout <<i+1<<"->"<< arr[i] <<endl;
}

int main()
{
    string s;  cin >> s;
    convertStringToArray(s);
    return 0;
}
