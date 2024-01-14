#include<bits/stdc++.h>
using namespace std;

class Stack {
    queue < int > q1, q2;
   public:
    Stack() {        
    }
    void push(int element) {
        q1.push(element);
    }
    int pop() {
        int val;
        while(q1.size()!=1){
            q2.push(q1.front());
            q1.pop();
        }
        if (q1.size()!=0) {
            val = q1.front();
            q1.pop();
            swap(q1, q2);
            return val;
        } else return -1;
    }

    int top() {
        int val;
        while(q1.size()!=1){
            q2.push(q1.front());
            q1.pop();
        }
        if (q1.size()!=0) {
            val = q1.front();
            q2.push(q1.front());
            q1.pop();
            swap(q1, q2);
            return val;
        } else return -1;
    }
    int getSize() {
        return q1.size();
    }

    bool isEmpty() {
        return q1.empty();
    }

};
int main()
{
 Stack s;
 s.push(17);
 s.push(23);
 s.push(11);
 cout<<s.pop()<<"  ";
 cout<<s.pop()<<"  ";
 cout<<s.pop()<<"  ";

 return 0;
}