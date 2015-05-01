# refs
Creates variables for your Android views.  Needs Node & xmldoc.

# Usage

```
./refs.js viewVarName layout_file.xml
```

viewVarName is the name of your view variable.  It will be used as:

```
viewVarName.findViewById(...)
```

layout_file.xml is the file that you want to scan for view items.  
Any view item with an 'android:id' attribute will be parsed.

The variable name will be created from your view id so:
```
android:id="@+id/list_view"
```
becomes
```
listView
```
