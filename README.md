# Form Name & Data Layer convention

This repo consists details of form name convention and sample datalayer for different form platform.

## Getting Started

These instructions will get you up and running on your local machine for development and testing purposes.

### new form name convention

The new form name convention will have the following structure 

##### brand:platform:pageType:product segment

Examples by platform & Brand

WBC

Application
```
wbc:ore:app:cc
wbc:wow:app:st
wbc:dom:app:td
wbc:voy:app:td
wbc:ein:app:in
```
Enquiry
```
wbc:wow:enq:st
wbc:dom:enq:td
wbc:voy:enq:td
```

STG

```
stg:oaf:app:cc
stg:ace:app:st
stg:wow:app:td
stg:wap:app:st
```

BOM

```
bom:oaf:app:cc
bom:ace:app:st
bom:wow:app:td
bom:wap:app:st
```

BSA

```
bsa:oaf:app:cc
bsa:ace:app:st
bsa:wow:app:td
```


### new variables and events

eVars

```
eVar41: journey-type
eVar42: form-type
eVar43: account-type

eVarXX: account-status
```

Props

```
prop41: product-count
prop42: business-type
```

Events

```
event17: Application welcome
event73: Quote save
event74: Quote retrieve
event86: Quote start
event87: Quote complete
```

## Other changes

* The transaction ID (evar39 and s.transactionID) will now be  combined value of multiple transaction with product id prefix
* the productID will have additional property to emphasize the primary product (primaryProduct : 'true'), in additon the tracking will contain a "1-" prefix to productID
* the productID will have additional property to emphasize the secondary product (secondaryProduct : 'true'), in additon the tracking will contain a "2-" prefix to productID
* in additon to already existing property for cross sell,  the tracking will contain a "X-" prefix (instead of suffix) to productID
* Application Status (old property: formCompleteStatus): Updated code to read new property, and new conditions to work only if it's a STP Form with status information

## Dependencies

Form name depends on siteID which will either come from analytics or siteID code in s_code.js