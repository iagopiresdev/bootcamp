#include <stdio.h>
#include <stdlib.h>

typedef struct node{
    int data;
    struct node *left;
    struct node *right;
}node;

node *insert_tree(node *root, int data){
    if(root == NULL){
        node *new_node = (node*)malloc(sizeof(node));
        new_node->data = data;
        new_node->left = NULL;
        new_node->right = NULL;
        return new_node;
    }
    else{
        if(data < root->data){
            root->left = insert_tree(root->left, data);
        }
        else{
            root->right = insert_tree(root->right, data);
        }
    return root;
    }
}

int main(){
    node* root = NULL;

    root = insert_tree(root, 10);
    printf("%d", root->data);
    printf("\n");

return 0;
}