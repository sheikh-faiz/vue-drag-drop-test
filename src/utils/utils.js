export const handleItemDrop = (grandParent, parent, data) => {
  console.log(grandParent);
  console.log("parent", parent);
  console.log("newnameschAnges", data);

  const oldnode = { ...data.item };
  const newnode = { name: oldnode.name, position: 0, direction: "left" };
  parent.child = parent.child === undefined ? [] : parent.child;
  if (parent.child.length < 3) {
    let isChild = checkforChild(data.item.child, parent);
    let isOneRoot = false;
    if (data.root.length == 1) {
      isOneRoot = true;
    }
    let newChild = {};
    if (data.root.length > 1) {
      newChild = { ...data.root[data.item.position - 1] };
    } else {
      newChild = { ...data.root[0] };
    }

    if (!isChild) {
      parent.child.push(newnode);
    }
    if (data.item.child && data.item.child.length > 0) {
      if (data.root[data.item.position - 1] != undefined) {
        data.root[data.item.position - 1].name =
          oldnode.child && oldnode.child.length > 1
            ? oldnode.child[parent.position - 1].name
            : oldnode.child[0].name;
        if (isChild) {
          if (data.item.child.length > 1) {
            data.item.child[parent.position - 1].name = newChild.name;
          } else {
            data.item.child[0].name = newChild.name;
          }
        }
      } else {
        if (data.root.length > 0) {
          data.root[0].name = oldnode.child[0].name;
          if (
            data.root.length == 1 &&
            data.item.child &&
              (data.item.child.length == 1 || data.item.child.length == 0)
          ) {
            data.item.child[0].name = newChild.name;
          }
        }
      }
      if (
        grandParent.length == 1 &&
        data.root.child &&
        data.root.child.length == 1
      ) {
        return;
      } else {
        if (!isChild) {
          if (!isOneRoot) {
            data.item.child.splice(0, 1);
          }
        }
      }
    } else {
      let index = data.root.findIndex((x) => x.position === data.item.position);
      if (index == 1) {
        data.root.splice(1, 1);
        if (data.root.child && data.root.child.length > 0) {
          if (data.root.child[0].direction == "right") {
            data.root.child[0].position = 1;
          }
        }
      } else {
        data.root.splice(0, 1);
        if (data.root.child && data.root.child.length > 0) {
          if (data.root.child[0].direction == "right") {
            data.root.child[0].position = 1;
          }
        }
      }
    }
  }
};
export const checkforChild = (parent, item) => {
  if (parent == undefined) {
    return false;
  }
  const i = parent.find((e) => {
    return item.id == e.id;
  });
  if (i != undefined) {
    return true;
  }
  return false;
};
