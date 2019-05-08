# Open Source Contribution Request (not applicable to bug fixing and sample code)
**Instructions:** Complete this request form if you intend to create a new SAP open source project or contribute features and enhancements to an existing third-party open source project. Make sure that you provide all required information. Attach the relevant documents (or provide links to them) as necessary, for example, a slide deck describing your business case. Be mindful that we cannot process your request if information is missing. Thank you in advance.

## 1. General Data

### 1.1 Requestor Name(s), SAP ID (I or D numbers), and SAP Organization 
```
Punit Ghodasara, I324801, CoE_IRE_SAP Cloud Platform
```

### 1.2 Responsible L1 and L2 Manager 
```
Tom McShane, I306817
Paul Cunningham, I017957
```

### 1.3 Contribution Title
(One sentence describing the intended contribution)
```
SAP Internet of Things Services (Cloud Foundry Edition) API SDK for Node.JS language.
```

### 1.4 Functional Scope of your Contribution (Brief overview of the intended contribution scope)
```
This NodeJS module wraps Device Management APIs available by SAP Internet of Things Services (CF)
This NodeJS module allows to push IoT sensor data to SAP IoT Services cloud via their cloud gateways.
This NodeJS module allows to read and process IoT data stored in SAP IoT Services cloud.
```

### 1.5 If this functionality is planned as open source project, provide your reasons for it. What are the expected benefits for SAP?
```
NodeJS developers interested to use SAP IoT offerings can fasttrack their app development.
Other SAP products/services running on Node can be integrated and leverage SAP IoT using this SDK
```

### 1.6 Deadlines
(Do you have a deadline for the intended contribution? Why?)
```
No hard deadline
```

## 2. Contribution Type
###  2.1 Do you want to create a new SAP open source project, or contribute to an existing third-party open source project?
```
New SAP Open Source Project
```

###  2.2 In case you want to create a new project:
Where do you want to publish your project (GitHub, Maven, NPM, etc.)
```
Github
NPM
```

## Risk Assessment Information

### For contributions to third-party projects, continue with [question 4](#section-4).

## 3. SAP Projects Only

### 3.1 Did or does any third party participate in the ideation, design, or development of the intended SAP project? 
```
No
```

### 3.2 Is the development of the contribution funded directly or indirectly by others (for example, EU research program)?
```
No
```

### 3.3 Does the SAP project contain or depend on any third-party code, materials, or confidential information? If applicable, enter the components that will be included in the OSS project, also indicating the dependencies on third-party sources. 
```
This project will depend on following NPM modules and are included as node libraries,
dotenv https://www.npmjs.com/package/dotenv
request-promise-native https://www.npmjs.com/package/request-promise-native
request https://www.npmjs.com/package/request
mqtt https://www.npmjs.com/package/mqtt
```

### 3.4 According to your knowledge is your project in competition to an SAP commercial solution?
```
Not to our knowledge
```

### 3.5 Does the SAP project or contributions make calls to any third-party web services or APIs? (If yes, please provide further details (for example, a link)) 
```
No. It calls only SAP APIs.
```

### 3.6 Are you aware of any SAP patents, patent applications and/or invention disclosures (IDF’s) that may potentially be related to the proposed contribution? (Y/N)
```
No
```

## <a name="section-4"></a>4. If you plan to contribute to a third-party open source project:

### 4.1 Is this a 1-time contribution or do you plan continuous contributions to the third-party project? Only relevant for 3rd Party projects
```
(Provide your answer here)
```

### 4.2 Do you document or call public SAP APIs of any SAP products or services?
```
(Provide your answer here)
```

### 4.3 Does the contribution contain or depend on any third-party code, materials, or confidential information? If applicable, enter the components that will be included in the OSS project, also indicating the dependencies on third-party sources. 
```
(Provide your answer here)
```

### 4.4 Does the contribution make calls to any third-party web services or APIs? (If yes, please provide further details (for example, a link)) 
```
(Provide your answer here)
```

### 4.5 Are you aware of any SAP patents, patent applications and/or invention disclosures (IDF’s) that may potentially be related to the proposed contribution? (Y/N)
```
*Please only answer with yes or no. If yes, we will get in touch with you to discuss details*
```

## 5. Export Control (valid for both, SAP and third-party projects)

### 5.1 Will the contribution be specifically designed, developed, configured or modified for (i) a military application, or (ii) for or with the assistance of a military, intelligence, or public security entity?
```
No
```

### 5.2 Does the contribution perform cryptography, or otherwise contain any parts or components that can perform any information security functions? 
```
No
```

## 6. Data Protection (valid for both, SAP and third-party projects): Does the project process personal data? 

```
No
```
