package com.example.cyu.contacts

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import kotlinx.android.synthetic.main.list_block.view.*

class ContactAdapter(context:Context, arrList:ArrayList<ContactData>): BaseAdapter() {

    private var arrayList = ArrayList<ContactData>()
    private var context: Context? = null
    private var myInflater: LayoutInflater? = null

    init {
        this.context = context
        this.myInflater = LayoutInflater.from(context)
        this.arrayList = arrList
    }

    override fun getView(p0: Int, p1: View?, p2: ViewGroup?): View {

        val myView = myInflater!!.inflate(R.layout.list_block, null as ViewGroup?)
        val conObj = arrayList[p0]

        val fullName : String = conObj.firstName.toString() + " " + conObj.lastName.toString()
        myView.contact_name.text = fullName

        return myView
    }

    override fun getItem(p0: Int): Any {
        return arrayList[p0]
    }

    override fun getItemId(p0: Int): Long {
        return p0.toLong()
    }

    override fun getCount(): Int {
        return arrayList.size
    }
}