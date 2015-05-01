# refs
Creates variables for your Android views.  

# Requirements

Node.js

xmldoc:
```
npm install xmldoc
```

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

# Example

If you had the following xml layout file called example.xml:

```XML
<LinearLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools" 
    android:id="@+id/my_linear_layout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context="com.example.fragment">

    <TextView
        android:id="@+id/txt_view"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"/>

    <RadioGroup
        android:id="@+id/radio_group"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal">

        <RadioButton
            android:id="@+id/rb_one"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content" />

        <RadioButton
            android:id="@+id/rb_two"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content" />

        <RadioButton
            android:id="@+id/rb_three"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content" />

    </RadioGroup>

</LinearLayout>
```

You would use the command:

```
./refs.js v fragment_book_list.xml
```

And would get the following result:

```java
LinearLayout myLinearLayout = (LinearLayout) v.findViewById(R.id.my_linear_layout);
TextView txtView = (TextView) v.findViewById(R.id.txt_view);
RadioGroup radioGroup = (RadioGroup) v.findViewById(R.id.radio_group);
RadioButton rbOne = (RadioButton) v.findViewById(R.id.rb_one);
RadioButton rbTwo = (RadioButton) v.findViewById(R.id.rb_two);
RadioButton rbThree = (RadioButton) v.findViewById(R.id.rb_three);
```
