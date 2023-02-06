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

void print_tree(node *root){
    if(root){
        print_tree(root->left);
        printf("%d ", root->data);
        print_tree(root->right);
    }
}

int main(){
    node* root = NULL;

    root = insert_tree(root, 10);
    insert_tree(root, 15);
    insert_tree(root, 35);
    insert_tree(root, 55);
    insert_tree(root, 5);
    insert_tree(root, 95);
    insert_tree(root, 45);
    insert_tree(root, 88);
    insert_tree(root, 90);

    print_tree(root);

return 0;
}