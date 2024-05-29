#include<iostream>
#include<string>
#include<algorithm>
#include<stack>

using namespace std;

#define ll long long 

// Implemented Function Will Reverse The String
// s : The string that will be reversed

//The First Way Using swap
void reversStringWay1(string s) {
    for (int i = 0; i < (s.size()) / 2; i++) {
        // swap(s[i], s[s.size() - i - 1]);
        char x = s[i];
        s[i] = s[s.size() - i - 1];
        s[s.size() - i - 1] = x;

    }
    cout << s << endl;
}


//The Second Way Using Stack
void reversStringWay2(string s) {
    
    stack<char>x;
    for (int i = 0; i < s.size(); i++)
        x.push(s[i]);

    for (int i = 0; !x.empty(); i--) {
        cout << x.top();
        x.pop();
    }
    cout << endl;
}

//The Thired Way Using Array
void reversStringWay3(string s) {

    string x;
    
    for (int i = (s.size()) - 1; i >= 0; i--)   x += s[i];

    cout << x << endl;
}

int main()
{
    string s;  cin >> s;
    reversStringWay1(s);
    reversStringWay2(s);
    reversStringWay3(s);
      
    return 0;
}
