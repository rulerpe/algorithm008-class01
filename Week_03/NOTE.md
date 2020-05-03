学习笔记

### Recursion:
- Recursion is common solution for Tree type of problem
- Uses call same function over and over 
- every level of recursion function is a copy of it environment,  has it;s own scope
- on attributes pass between level can carry difference.
- Template: (must remember )
```
    def recursion(level, param1, param2, ...):
    // recursion terminator
    if level > MAX_LEVEL:
    process_result
    return

    // process logic in current level
    process(level, data...)

    // drill down
    self.recursion(level + 1, p1, ...)
    
    // reverse the current level status if needed
```
- never do recursion manually in your head or on paper
- find simplest repeatable solution for your problem
- find patterens