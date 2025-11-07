import React, { useEffect, useMemo, useRef, useState } from "react";

const TAB_DATA = [
  {
    label: "Preliminary",
    content: `
i) Ownership of the Web-Site

(a) JBV Share Broker And Fintech Pvt. Ltd. being a broker registered with the Securities and Exchange Board of having obtained Certificate of Registration No. INZ000319830 thereby being entitled to effect purchase and sale transactions of securities (hereinafter referred to as the "Securities Dealings") online.

ii) Registration for use of the Facilities and Services

(a)  Any person visiting the Web Site may acce ss and use the Facilities by establishing an online persona with a unique 'Client ID' and 'Password', in the manner as indicated on the Web-Site. “Facilities” shall mean and include any information, materials, documents, chat-room facilities, Downloads (software or otherwise), data, stock market quotation ticker tape facilities, and all other information and utilities contained or accessible on or through the Web Site as may be provided on the Web Site from time to time, [other than any information directly required in relation to the Services].

(b) Only persons who enter into an agreement with the Member and who have been provided with a unique Trading Password for online trading and unique Client Code for online trading by the Member in the manner as indicated on the Web-Site for online trading and give exact code for trading respectfully shall be entitled to avail the Services provided by the Member.

(c) The Terms shall be deemed to form part of the Member-Constituent Agreement and shall be deemed to be incorporated therein to the same extent as if these provisions had been set forth in full therein. The Constituent's entitlement to avail the Services or any part thereof shall be subject to compliance with all the terms and conditions set forth herein.`,
  },

  {
    label: "Conditions of Use of The Services",
    content: `
i) Subject Matter of the Services The Services offered by the Member include the sale and purchase of dematerialized securities trading (in e-trading account on the internet and also in off-line trading and delivery of shares in physical mode wherever the same is traded on off-line on specific direction received by the 'Member' at any of their terminals) in the cash/normal segment of the market [and shall include trading in derivative products or in the carry forward segment, and such other services/ products as may be permitted from time to time].

ii) Order Entry

(a) The Constituent shall be entitled to place an order for the sale or purchase of any Admitted Security at any time, regardless of the duration of the trading hours of the Exchange, through e-mail, writing, telephonic placement by the Constituent or his duly authorized representatives whose particulars has been provided by the Constituent to the member and on receipt of such instructions those orders shall be forwarded for the execution.

(b) All orders entered by Constituent, either electronically or otherwise as detailed above, are based upon their investment decisions and their sole responsibility and will not hold, nor seek to hold the Member or any of its officers, directors, employees, agents, subsidiaries or affiliates, liable for any trading losses or other losses incurred by Constituent, including in the event that any order is placed by the Constituent on the basis of the Facilities or any information (including any investment information, advice, research reports, or any other information) that may be made available on the Web-Site.

(c) The Member shall be deemed to not have received any order whether electronically transmitted or otherwise until it has confirmed the receipt of such order as mentioned in sub-clause II.ii (a).(d) The Constituent agrees that placing an order with the Member, either electronically or otherwise, does not guarantee execution of the order, regardless of the confirmation by the Member of the receipt of the order and/or its execution and the Member shall not be liable for any losses, damage or claims on account of the non-execution of any order placed.

(d) The Constituent hereby accepts all responsibility for knowing the status of all corporate benefits like rights and bonus issues, dividends and stock splits of shares he/she/it intends to trade in or held in his/her/its account. The Constituent further accepts all responsibility for knowing the correct ISIN numbers of the shares in his/her/its account and the eligibility of the shares to meet share pay in obligations to the BSE/NSE whether received by way of purchases, rights, bonuses, stock splits, off market transfers or otherwise.

(e) Prior to placing an order in connection with the sale/purchase or transfer of any securities in which Constituent requires any form of regulatory or other permission, the Constituent must advise the Member of the status of the securities and furnish necessary documents including opinions of legal counsel prior to the execution of the order. The Constituent acknowledges and accepts that delays may occur in relation to the processing of such orders, despite the necessary documents being furnished in a timely manner. The Member may at its sole discretion refuse to execute any such order till it is satisfied of the legality of the transaction. The Constituent is responsible for all costs associated with compliance or failure to comply with all the regulatory requirements and hereby agrees to fully indemnify the Member from any costs, losses, claims or other liability arising on account of such orders.

iii) Order Execution

(a) In the event that the order is placed during the trading hours of the BSE/NSE, it shall be routed to and executed on the market system. However, in the event that the order is placed at any other time, the order shall be routed to and executed during the next succeeding trading session of the BSE/NSE.

(b) The Constituent agrees and appoints the Member as its agent to take all necessary measures to complete the transactions and hereby authorizes the Member to make any and all advances and expend monies as may be required.

(c) The Constituent acknowledges that whilst orders are normally routed through the market systems almost simultaneously with the placing of the order, the Constituent is aware that the Member has provided on the Web-Site a facility for reconfirmation of orders which are larger than those specified by the Member's risk management policy and is also aware that the Member has the discretion to reject the execution of such orders based on such risk management policy. The Member shall not be liable for any delay or cancellation of any order due to the exercise of the Member's discretion under such policy.

(d) The Constituent acknowledges and accepts that the Member has the sole discretion to reject or cancel any order that may be placed by the Constituent for any reason whatsoever, including for any breach of the Margin requirements as stipulated hereunder in Paragraph II.vi and the Member shall not be liable for any losses, damage or claims on account of such rejection or cancellation as the case may

(e) The Constituent acknowledges and accepts that the BSE/NSE may reject or cancel any trade suo moto without ascribing any reasons therefor and the Member shall not be liable for any losses, damage or claims on account of such rejection or cancellation as the case may be.

The Constituent further acknowledges and accepts that it will receive the price at which the order was actually executed in the marketplace, which may be different from the price at which the security was traded when the order was entered into the Member's system.

(f) The Constituent hereby agrees that Member shall not be responsible or liable for the execution of any order that may have been placed by the Constituent or any unauthorised use of the Constituent's Trading Password by any person.

(g) The cancellations or modifications to orders placed is not guaranteed. Cancellation of orders is possible only if the original order remains pending at the BSE/NSE. The cancellation or modification of an order shall be deemed not to have been executed unless a confirmation to such effect is received from the Member. The Constituent agrees that the Member shall not be liable for any losses, damage or claims on account of the non-execution or delayed execution of an order of cancellation or modification. Unless otherwise specified by the Member, any order not executed at the end of the relevant BSE/NSE trading day shall stand cancelled. To remove any doubt, it is hereby clarified that an order placed prior to or during the trading day at the BSE/NSE, shall not remain valid for execution at any subsequent trading day at the BSE/NSE.

(h) The Constituent also accepts responsibility for knowing the trading and settlement cycles of the BSE/NSE and the settlements pay in/pay out dates for funds and securities and in the event any trades or transactions are reported late to the Member on account of any problems at the Exchange or for whatever reason, the Constituent in turn will be subject to late reporting of transactions

(i) Any errors reported to the Constituent for any reason whatsoever will stand subsequently corrected to reflect the transaction that was effected in the market and the Constituent agrees that the Member shall not be liable for any damage, loss or claim in account of such error or correction thereof.

iv) Purchase of the Admitted Securities

(a) Prior to placing any order for the purchase of any Admitted Security, the Constituent shall ensure that sufficient cash credit balance is available in its account with the Member. The Constituent is responsible for all of their orders, including any orders, which exceed the available cash, credit balances available to its account and are executed by the Member, inadvertently or otherwise.

(b) Any order accepted and executed, inadvertently or otherwise, without sufficient cash credit balance will be subject to cancellation or liquidation at the Member's discretion, unless the Constituent immediately, upon demand by the Member, makes good the shortfall in the amount as indicated by the Member.

(b) The date for payment in the case of purchase of securities by the Constituent will be viewed on the day to day basis by the member and the same shall be intimated by the member to the Constituent either telephonically or otherwise as required for maintaining the account of outstanding as per BSE/NSE rules and the Constituent shall within two days make up the deficiency of balance and bring it to cash credit with the reasonable margin to withstand his future transactions within the 'margin' limit provided herein after on the date intimated by the Member to the Constituent for the same (the “Intimated Date”) and which may be a date which is at least [two] working days in advance of the pay in date of the BSE/NSE. In the case where the payment is not made by the Intimated Date, the securities purchased by the Member on behalf of the Constituent shall be liable to be sold without any further reference to the Constituent and any loss or damage as a result of such sale would be borne solely by the Constituent.

v) Sale of the Admitted Securities

(a)  Prior to placing any order for the sale of any Admitted Security, the Constituent shall ensure that the concerned security is available in sufficient quantity in its/his/her account with the Member. The Constituent is responsible for all of their orders, including any orders, which exceed the available quantity of the relevant security and are executed by the Member, inadvertently or otherwise.

(b) The Constituent agrees and hereby authorizes the Member to block as sold the relevant securities, as standing to its/his/her account, against its/his/her order to sell securities. If its/his/her order gets executed either fully or partially then the securities to the extent sold, would be unblocked on the trade date and the transaction would be effected. The Constituent agrees that it/he/she shall not withdraw/pledge or otherwise use or attempt to withdraw/pledge or otherwise use, the blocked securities. The Constituent hereby authorizes the Member to dishonor any orders issued against the blocked security.

(c) The Constituent acknowledges and agrees that the proceeds of the sale will not be credited to the cash credit balance account of the Constituent until the securities have been delivered to the BSE/NSE/clearing house and pay out is received from the BSE/NSE clearing House. The proceeds of all sales will be credited, to the cash credit balances account of the Constituent as maintained by the Member, directly after settlement date

(d) If the securities are not received on or before the settlement date or securities received are not in deliverable state or due to any other reason whatsoever, the Constituent is not able to deliver securities, the securities will be auctioned or closed out as per the rules of the BSE/NSE. Consequently, the Constituent will be responsible for any resulting losses and all associated costs including any penalty levied by the BSE/NSE.

vi) Margins

(a)  The Constituent shall maintain such quantity of securities and such amount of cash credit balances (hereinafter referred to as the “Margin”) as required by the applicable statutes, rules, regulations, procedures or as deemed necessary or advisable by the Member, provided that the Margin shall not at any time be less than [20%] of the price of the Admitted Securities proposed to be purchased or sold. The Constituent agrees that no interest shall be payable on the Margin as maintained with the Member. The Constituent shall be permitted to trade upto a predetermined number of times of the Margin and the quantum of such multiple shall be determined at the sole discretion of the Member.

(b) The margin requirement and squaring up process for online trading is different, the margin in online account will not be considered in the offline account and vice-versa unless specifically directed by Constituent. The accounting process for both accounts is different and is independent of each other.

(c)  In case there is any change in policy relating to Risk Management pertaining to margin requirement and squaring up process the same would be reflected to the user and at the registered office and terminals of the member and the onus is on the the Constituent to keep check, understand, and agree with the Risk Management policy pertaining to margin requirement and squaring up process from time to time.

(d) The Constituent shall also remain in touch with the member to keep a regular check on his account and margin requirements, for maintaining sufficient margin with the member to undertake any transaction in his a/c in off line and online trading. If the Member considers it necessary for its own protection, it may require the Constituent to immediately on demand deposit cash or securities to their account prior to any applicable settlement date in order to assure due performance of their open contractual commitments. If Constituent does not provide such additional cash or securities, the Constituent hereby grants to the Member the right to sell any or all securities extant in their account, buy any or all relevant securities which may be short in their account, cancel any or all open orders and/or close any or all outstanding contracts.

(e) In addition, Constituent acknowledges and agrees that the Member may exercise any or all of the above rights, prior to or without any demand, for additional cash or securities, or notice of sale or purchase, or other notice or intimation. Any such sales or purchases may be made at any time at the sole discretion of the Member on any market where such business is usually transacted, or at public auction or private sale, or the Member may purchase/sell for its own account. The making/giving of any prior demand or call or notice of the time and place of such sale or purchase shall not be considered as a waiver of any rights of the Member to sell or buy without any such demand, call or notice, at that time or at any time subsequently.

(f) In addition to the above, if the Constituent does not credit its cash or securities account as maintained with the Member, to make up any shortfall in the Margin, instantaneously, to enable restoration of the Margin in Constituent's account, the position of the Constituent may be squared off by the Member, without any further reference to the Constituent and without prior notification, and any resultant or associated losses that may occur due to such squaring off shall be borne by the Constituent, and the Member is hereby fully indemnified and held harmless by the Constituent in this behalf. In case where the payment by the Constituent towards the Margin is made through a cheque issued in favour of the Member, any trade would be executed by the Member only upon the realisation of the funds of the said cheque.

vii) Confirmations and Contract Notes

(a)  The Constituent is required to ascertain the status of its/his/her order (including any rejection of the same) which would be posted on the relevant sections of the Web-Site or the Constituent 1may enquire the balance as maintained by member or the member shall keep sending the details of contract notes and the status of his account on fortnight basis wherever the Constituent is availing the services of the member”off-line'from any terminals of the member.

(b) Constituent understands that it is its/his/her responsibility to review, upon first receipt, whether delivered to Constituent by mail, by e-mail, or other electronic means, all confirmations, statements, notices and other communications, including but not limited to, margin, maintenance calls, and prospectuses. Notices and other communications may also be provided to Constituent verbally, in writing or by other means.

(c) The Member shall deliver to the Constituent via email or other electronic means or otherwise a contract note of the trades executed on their behalf on the trade date, or should post such information on the website, within 24 hours of the execution of the order. The contract note shall be final and binding proof of the order placed by the Constituent and confirmation of trade, regardless of any apparent or inadvertent errors.

(d) All information contained in any confirmation, contract note or other communications shall be binding upon the Constituent in relation to all trades/transactions, whether the orders are given by the Constituent through the Web-Site or by telephonic means or otherwise

viii) Charges

(a) The Constituent agrees to pay the brokerage charges, BSE/NSE related charges, statutory charges/taxes and any other charges (including but not limited to security handling charges on settlement) as they exist from time to time and as they apply to the Constituent's account, in respect of trades/transactions and services that the Constituent receives from the Member. The brokerage shall be paid in the manner intimated by the Member to the Constituent from time to time, including as a percentage of the value of the trade or as a flat fee or otherwise, together with the service tax/securities transaction tax as may be applicable from time to time on the same. The Constituent further agrees to pay any applicable taxes that may be levied on the transaction.

(b) The Member shall debit the charges of the depository participant for the trades and the bank charges for the realisation of cheques etc. to the Constituent account.

(c) Notwithstanding anything contained in these Terms, any amounts which are overdue from the Constituent to the Member will be charged delayed payment charges at the rate of [2%] per month or such other rate as may be determined by the Member and notified on the web site and the Constituent hereby authorises the Member to directly debit the same to the account of the Constituent.

ix) Constituents Cash Credit and Securities Acco

(a) The Member shall maintain such books of account in such manner so as to show and distinguish in connection with its business as a trading member broker the moneys and securities received from or on account of each of the Constituents, and the moneys and securities received on its own account.

(b) The Constituent is required to ascertain all ledger balances of moneys and securities standing to its credit, which would be posted only on the relevant sections of the web site, and no separate intimation of the ledger balances of the Constituent in his account would be sent to the Constituent either physically or electronically unless specifically requested in writing by the Constituent. The information as contained in the ledger balances shall be binding upon the Constituent and the Constituent hereby agrees that the Member shall not be liable for any loss, damage or claim on account of any error in the information contained in the ledger balances.

(c) All payments in respect of transaction made by the Constituent to the company shall be payable at Mumbai or such other places as may be instructed by the Member, drafts and cheques in that behalf shall be drawn in favour of the company and shall be payable at Mumbai or such other places as may be instructed by the member from time to time. Final settlement of outstanding account in respect of transactions between the Member and Constituent and periodical settlement and termination of contract shall be struck and finalised at the company Head Office at Mumbai.

(d) The Constituent hereby authorises and empowers members to adjust all the debts/credits (funds/stocks) resulting from trading transactions in any of the following segment of BSE/NSE vis-à-vis F&O, Equity, Depository with any cash segment (equity) account and vice-versa in order to discharge any financial liability/obligation towards in any segment.

(e) That the Constituent authorises the trading member to maintain a running account for me/us/we for adjustment of any debit/credit resulting from any transactions by it/him/her in one settlement for adjustment towards it/her/his credit/debit in subsequent settlements.

(f) All transactions with The Stock Exchange, Mumbai (BSE) and/or the National Stock Exchange of India Limited (NSE) will be subject to the rules, regulations and Bye-laws of that Exchange apart from the existing terms and conditions as mentioned thereof.

(g) To avoid any ambiguity it is hereby provided that notwithstanding anything contained in these Terms or in the Member-Constituent Agreement or any other understanding or agreement between the Member and Constituent, the Member's own records of the orders, cancellations, modifications, trades and transactions, in whatsoever manner maintained shall be deemed to be and is hereby accepted by the Constituent as conclusive and binding on the Constituent for all purposes and further the Constituent shall not challenge the accuracy, truth, or correctness of the said records in any manner and for any purpose whatsoever.

x) Further Documentation The Constituent agrees to complete any further documentation that may be required in relation to any of the securities dealings or by any of the regulatory authorities or under the Member's policies as may be notified from time to time or under any law, regulation, guideline, rule, byelaw, order or other edict having the force of law. II.xii Compliance with Laws All transactions that are carried out by and on behalf of the Constituent shall be subject to Government notifications, the rules, regulations and guidelines issued by SEBI, the Reserve Bank of India and the National Securities Depository Limited, the Central Depository Services Limited, the Securities Contracts Regulation Act and the rules made there under, and the byelaws, constitution, rules, regulations, customs and usage of the BSE/NSE, if any.`,
  },

  {
    label: "Additional Conditions in Relation to Electronic Orders",
    content: `
    i) List of Dematerialised Securities The Member shall notify the securities for which this facility is made available from time to time on the Web Site. The Member would have the right to add or delete securities for which the facility is made available in its absolute discretion and details of the same would be posted on the Web Site and no separate intimation whatsoever thereof will be sent to the Constituent.

ii) Protection of Constituent's Trading Password The Constituent shall immediately notify the Member in writing, delivered via e-mail, Speed Post and Registered AD, if the Constituent becomes aware of any loss, theft or unauthorised use of the Constituent's Trading Password and account number; or any failure by the Constituent to receive an accurate written confirmation of an execution including the contract note for the same; or any receipt by the Constituent of confirmation of an order and/or execution which the Constituent did not place; or any inaccurate information in the Constituent's account balances, securities positions, or transaction history. In the case where the Constituent notifies such loss, theft or unauthorised use of the Constituent's Trading Password to the Member, the Member shall suspend the use of the account of the Constituent. However, the Constituent shall be responsible and liable for all transactions that are carried out by the use of the Constituent Trading Password. When any of the above circumstances occur, neither the Member nor any of its officers, directors, employees, agents, affiliates or subsidiaries will have any responsibility or liability to the Constituent or to any other person whose claim may arise through the Constituent with respect to any of the circumstances described above.

iii) Use of Constituent's Trading Password The Constituent confirms and agrees that it will be the sole authorised user of the Trading Password /s to be given to it by the Member. The Constituent accepts sole responsibility for use, confidentiality and protection of the Trading Password /s as well as for all orders and information changes entered into the Constituent's account using such Trading Password. The Constituent shall ensure that the Trading Password /s is/are not revealed to any third party or recorded in any written or electronic form. If the Constituent forgets the Trading Password, a request for change of the Trading Password should be sent to the Member in writing. On receipt of such a request the Member shall discontinue the use of the old Trading Password and shall generate a new Trading Password for the Constituent, which shall be communicated to the Constituent. However, the Constituent shall be responsible and liable for all transactions that are carried out by the use of the old Trading Password. Neither the Member nor any of its officers directors employees agents affiliates or subsidiaries will have any responsibility or liability to the In addition, the Constituent hereby grants to JBV Share Broker And Fintech Pvt. Ltd. the right to with-hold its/he/her securities payment and/or funds pay-out from the stock exchange in part or full. Constituent or to any other person whose claim may arise through the Constituent with respect to any of the circumstances described above.

iv) Form of Trading Password The Constituent shall use a Trading Password of 6-8 characters in length, which is a combination of letters and numbers. The Trading Password shall not be a combination relating to name or age or other personal information, which would render it easily deducible. The Trading Password shall be valid for a period of one month only. In the case where the Constituent wishes to change his Trading Password he can do so on the Web Site in the prescribed manner.

v) Recording of Trading Password The Constituent shall memorise the Trading Password and not record it in written or electronic form. In the event that the Constituent does record the Trading Password in written or electronic form, he/she/it shall do so at his/her/its sole risk and responsibility.

vi) Responsibility for Use of the Trading Password Any order entered using the Trading Password is deemed to be that of the Constituent. If third parties gain access to the Member's services through the use of the Trading Password, the Constituent will be deemed to be responsible for the same and hereby indemnifies and holds harmless the Member against any liability, costs or damages arising out of claims or suits by or against such third parties based upon or relating to such access and use, since the primary responsibility for such transaction shall be that of the Constituent.

vii) Communications Equipment of the Constituent The Constituent is responsible for installing and maintaining the communications equipment (including personal computers and modems) and telephone or alternative services required at the Constituent's end and connectivity required for accessing and using the web site or related services. All communications service charges, levies and fees incurred by the Constituent in accessing the web site or related services will be borne by the Constituent.

viii) Constituent's Infrastructure For the purposes of these Terms, it is presumed that the Constituent has all the necessary and compatible infrastructure ready at its end for the purpose of accessing the web site of the Member prior to accessing the services provided pursuant to these Terms. The Member will not (and shall not be under any obligation to) assist the Constituent in installing the required infrastructure or obtaining the necessary equipment permits and clearances to establish connectivity or linkages to the web site of the Member. III.ix Prevention of Unauthorised Use The Constituent will install the necessary safeguards and access restrictions to prevent unauthorised use of Constituents computer systems and ensure that no unauthorised person can gain access to the computer systems.`,
  },

  {
    label: "Additional Conditions In Relation to ral Orders On-Line& Off-Line",
    content: `
    (a) The Constituent agrees and hereby authorises the Member at its sole discretion and without any prior notice to the Constituent, to record any conversation between the Constituent and the Member. Such recording shall be deemed to be and is hereby accepted by the Constituent as conclusive and binding on the Constituent for all purposes and further the Constituent shall not challenge the accuracy, truth, or correctness of the said records in any manner and for any purpose whatsoever.

    (b) The Constituent hereby agrees that the Member shall not be liable for any losses, damage or claim on account of transactions effected by the Member on behalf of the Constituent arising from any incorrect or erroneous transfer or collection of the order instructions from the Constituent.`,
  },
  {
    label: "Member Constituent Communications",
    content: `
    i) Form of Communication Documents, which may be sent by electronic delivery between the parties, may be in any of the following manners (a) an electronic mail ('e-mail') including any automated replies from the system of the Member, (b) an electronic mail attachment, or (c) in the form of an available Download from the web site. (d) by telephonic information duly recorded. (e) by courier containing details of transaction confirmations, account statements requisition of any delivery related documents on the last known address of the Constituent.

ii) Change of Address Unless the Constituent informs the Member of the change of the address for communication in writing, all notices, circulars, communication or mail sent to the existing address shall be deemed to have been received by the Constituent irrespective of whether they are actually received or not.

iii) Notices/ Policies Certain policies and/or procedures may be further outlined on the Member's web site and material/literature and frequently asked questions (FAQ's) may be provided to the Constituent. Through the use of the Member's web site and services, the Constituent agrees to be bound by any and all such notices, policies and terms of doing business.`,
  },

  {
    label: "Termination",
    content: `
    (a) The Member-Constituent Agreement and access to the use of the Web-Site, the Services, the Facilities and the Content may upon notice of one month be terminated by mutual consent of the Constituent and the Member. (b) The termination of the Member-Constituent Agreement and access to the use of the Web-Site, the Services, the Facilities and the Content will not affect the rights and/or obligations of either the Member or the Constituent incurred prior to the date of such termination and the parties shall enjoy the same rights and shall have the same obligations in respect of such transactions.`,
  },

  {
    label: "Miscellaneous Information",
    content: `
    i)Facilities and Web Content

(a) The Constituent acknowledges and agrees that each participating stock exchange or association or agency asserts a proprietary interest in all of the market data it furnishes to parties that disseminate the said data. The Constituent shall use real-time quotes received on the web site of the Member only for the Constituent's individual use and shall not furnish such data to any other person or entity. The Constituent is authorised to use materials which are made available by the Member's web site for the Constituent's own needs only, and the Constituent is not authorised to resell access to any such materials or to make copies of any such materials for sale or use to and by others. The Constituent shall not delete copyright or other intellectual property rights notices from printouts of electronically accessed materials from the Member's web site.

(b) All materials published on the Web-Site, including, without limitation, information, text, photographs, images, graphics, software, audio, and video and/or other visual reproductions (hereinafter referred to as the “Content”) are intended solely for personal, non-commercial use. All rights pertaining to the Content or any part thereof shall vest only in the relevant owners of the same and no other person may modify, publish, transmit, participate in the transfer or sale of, reproduce (except as provided herein), create derivative works from, distribute, perform, display or in any way exploit, any of the Content, in whole or in part.

(c) All Content is owned or controlled by or the party credited as the provider of such Content. The Content, and the entire Web-Site, including without limitation all materials published by and all postings on the Web-Site may be protected by copyright pursuant to Indian copyright laws, international conventions, and other copyright laws. JBV Share Broker And Fintech Pvt. Ltd. owns a copyright in the selection, coordination, arrangement and enhancement of such Content, as well as in the original component of the Content itself. All persons visiting and/or using any of the Facilities on the Web-Site or viewing any of the Content thereof (hereinafter such person shall be referred to as the “Visitor”, which term shall mean and include the Constituent in relation to any use of the Facilities and Content) shall abide by all copyright notices, conventions, and other copyright laws. The Visitor shall abide by all copyright notices, information or restrictions contained in any Content accessed by or through the Web-Site. Reproduction of the Web-Site site, in whole or in part, without the prior written permission of is strictly prohibited.

(d) To the extent that any part of the Content may be Downloaded or copied, the same may be done only for personal non-commercial purpose(s) and use(s), and provided that all copyright and other notices contained in such Content are faithfully maintained and the Content shall not be stored in any media other than in the Visitor's personal computer. In the event any software is Downloaded from the Web-Site, such software, including without limitation any files, images incorporated in or generated by the software, and data accompanying the software, are licensed to the Visitor by for personal, non-commercial use and viewing only. The software may not be redistributed, sold, decompliled, reverse engineered or otherwise reduced to a human perceivable form. JBV Share Broker And Fintech Pvt. Ltd. retains full and complete title and rights to all intellectual property in Web Site.

(e) JBV Share Broker And Fintech Pvt. Ltd. shall not be liable for truth, accuracy or completeness of the information or for any errors, mistakes or omissions therein or for any delays or interruptions of such information for whatever cause. It is expressly understood and agreed to by the Visitor that except as specifically provided herein, all warranties, express or implied, including any implied warranties or merchantability and/or fitness for a particular purpose, are hereby excluded.

ii) Third Party Providers/Links The Web Site may contain links to other web sites on the World Wide Web. JBV Share Broker And Fintech Pvt. Ltd. is not responsible for their resources or their content or the availability thereof.`,
  },

  {
    label: "Submissions",
    content: `
    (a) The Visitor shall remain solely responsible for all submissions on and to the Web Site. JBV Share Broker And Fintech Pvt. Ltd. is not responsible for the content or message of any submissions. The member does not guarantee, and makes no formal representation or warranty as to, the accuracy, veracity or completeness of any information provided by others in any portion or page of the Web-Site, nor does JBV Share Broker And Fintech Pvt. Ltd. necessarily endorse, support, sanction, encourage, verify, agree with, or reject, diminish or disagree with, the comments, opinions or statements posted by others on the Web-Site.

(b) While does not and cannot review every message posted or item submitted to/on the Web-Site, JBV Share Broker And Fintech Pvt. Ltd. reserves the right, in its sole discretion, but assumes no duty, to delete, move, or edit submissions that it deems false, inappropriate, abusive, defamatory, obscene, in violation of copyright or trademark laws, or otherwise unacceptable, and the Visitor expressly acknowledges and accepts that its submissions may be edited, removed, modified, published, re-published, transmitted and displayed by in its sole discretion.

(c) The Web Site and its Facilities including the discussion groups and chat rooms shall be used only in a non-commercial manner. No part of the Web Site, discussion groups and/or chat rooms shall be used to solicit Visitors to become users of commercial online information services or for any other commercial services. The Visitor shall not disrupt or interfere with any aspect or element of the Web Site nor shall the Visitor do anything, which, in the sole judgment of , will restrict or inhibit any other Visitor from using and enjoying the Web Site and/or any of its Facilities. The Visitor shall not, without the express written approval of , post or otherwise distribute any material containing any solicitation of funds, advertising or solicitation for goods or services. The Visitor shall not copy third party articles into the chat rooms or discussion groups available on the Web Site. No Visitor shall tout or hype a stock or company, or post the same note on multiple occasions in a single day (a practice known as 'spamming'). The Visitor shall not upload to, or otherwise submit or publish through, the Web-Site any content or material which is libelous, defamatory, obscene, pornographic, abusive, or hateful, or which invades anyone's privacy, encourages conduct that would constitute a criminal offense, or otherwise violates any third party rights or local, state, federal or international law or regulation.

(d) Those Visitors with formal connections or affiliations to or with a company being discussed in any forum, including among other things any and all positions of employment, directorships, consultancies and/or substantial share holdings, must identify themselves as such, and disclose such connection or affiliation, within their first post in that topic, company focus, or subject matter.

(e) The author or creator of any and all submissions in print or other forms or other uploads to the discussion groups and/or chat rooms, transfers and assigns to , by virtue of submission to the Web-Site and this agreement, the entire copyright, throughout the universe, in any and all media and forms of publication, reproduction, transmission, distribution, performance, or display, The provisions of this agreement shall always be subject to government notifications, and rules, regulations & guidelines issued by SEBI & stock exchange rules, regulations & bye-laws that may be in force from time to time & the securities contract regulation Act. The Rules thereunder and any other applicable statutory provisions and/or regulations. Now in existence or hereafter developed, in such work or other original materials; without separate, retained or reversionary rights being held by such author, creator or other person submitting such work. JBV Share Broker And Fintech Pvt. Ltd. may exercise the rights granted herein in such from as it may in its sole discretion determine; such that the submitted material may be published, reproduced, reprinted, distributed, performed, displayed, included in anthologies and compilations, and/or otherwise transmitted (including but not limited to electronic and optical versions and in any other media now in existence or hereafter developed) in whole or in part, whether or not combined with the work of others. In addition, JBV Share Broker And Fintech Pvt. Ltd. may use the name and electronic address of the author, creator and/or other person submitting the work in publishing, promoting, advertising, and publicizing their publications and information products and services, and in any merchandising.`,
  },

  {
    label: "Warranties of Constituent",
    content: `
    (a) The Constituent hereby represents and warrants that the terms and conditions of these Terms have been clearly understood and that the information furnished to the Member is accurate and truthful .

(b) The Constituent confirms that it/he/she is of legal age and he/she/it has obtained the necessary approvals from the relevant regulatory/ legal and compliance authorities to access the services provided pursuant to these Terms.`,
  },

  {
    label: "Indemnity",
    content: `
    (a) Though orders are generally routed to the marketplace shortly after the time the order is placed by the Constituent on the system there may be a delay in the execution of the order due to any link/system failure at the Constituent/Member/BSE/NSE's end. The Constituent hereby specifically indemnifies and holds the Member harmless from any and all claims, and agrees that the Member shall not be liable for any loss, actual or perceived, caused directly or indirectly by government restriction, exchange or market regulation, suspension of trading, war, strike, equipment failure, communication line failure, system failure, security failure on the Internet, shut down of systems for any reason (including on account of computer viruses), unauthorized access, theft, any fraud committed by any person whether in the employment of the Member or otherwise or any problem, technological or otherwise, that might prevent the Constituent from entering the Member's system or from executing an order or in respect of other conditions.

(b) The Constituent further agrees that he/she/it will not be compensated by the Member for any "lost opportunity' viz. notional profits on buy/sell orders which could not be executed or real loss from delay in executed orders due to any reason whatsoever, including but not limited to time lag in the execution of the order or the speed at which the system of the Member or of the Exchanges is operating or the delay in stock quotes or any shutting down by the Member of his system for any reason or the Member disabling the Constituent from trading on his system for any reason whatsoever.

i) Member's Liability

(a) Under no circumstances, including but not limited to negligence, shall the Member or anyone involved in creating, producing, delivering or managing the Services be liable for any direct, indirect, incidental, special or consequential damages, even if the Member or such person has been advised of the possibility of such damages, that result from the use of or inability to use the service, delay in transmission of any communication, in each case for any reason whatsoever (including on account of breakdown in systems) or out of any breach of any warranty or due to any fraud committed by any person whether in the employment of the Member or otherwise.

(b) The Constituent agrees to fully indemnify and hold harmless the Member for any losses arising from the execution of incorrect/ ambiguous or fraudulent instructions that got entered through the system at the Constituent's end.

ii) Limitation of liability The Member does not guarantee, and shall not be deemed to have guaranteed, the timeliness, sequence, accuracy, completeness, reliability or content of market information, or messages disseminated to the Constituent. The Member shall not be liable for any inaccuracy, error or delay in, or omission of, (1) any such data, information or message, or (2) the transmission or delivery of any such data, information or message; or any loss or damage arising from or occasioned by (i) any such inaccuracy, error, delay or omission, (ii) non-performance, or (iii)interruption in any such data, information or message, due either to any act or omission by the Member or to any "force majeure" event (e.g., flood, extraordinary weather condition, earthquake or other act of God, fire, war, insurrection, riot, labour dispute, accident, action of government, communications, power failure, shut down of systems for any reason (including on account of computer viruses), equipment or software malfunction), any fraud committed by any person whether in the employment of the Member or otherwise or any other cause beyond the reasonable control of the Member.

iii) Interruption in service The Member does not warrant that the service will be uninterrupted or error free. The service is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including, without limitation, those of merchantability and fitness for a particular purpose. The Constituent agrees that the Member shall not be held responsible for any breakdown of the system either due to the fault of the systems of the Member or of the Exchanges or otherwise.

iv) Amendment/ Modification of the Terms The Member may at any time amend these Terms, by modifying or rescinding any of the existing provisions or conditions or by adding any new provision or condition, by conspicuously posting notice of such amendment on the web site. The Member shall not be required to communicate any modification or rescission to the Constituent either through physical or electronic form, and any notice of amendment or modification is hereby waived by the Constituent. The continued use of the services of the Member after such notice will constitute acknowledgement and acceptance of such amendment. These Terms (as amended or modified from time to time) represent the entire agreement between the Constituent and the Member concerning the subject matter hereof. The continued use of the Services by the Constituent constitutes the Constituent's acceptance of any and all modifications and amendments of the Terms.

v) Severability If any provisions or of these Terms are held invalid or unenforceable by reason of any law, rule, administrative order or judicial decision by any court, or regulatory or self-regulatory agency or body, such invalidity or unenforceability shall attach only to such provision or terms held invalid. The validity of the remaining provisions and terms shall not be affected thereby and these Terms shall be carried out as if any such invalid or unenforceable provisions or terms were not contained herein.

vi) No Assignment The rights of the Constituent under these Terms are not transferable under any circumstances and shall be used only by the Constituent

vii) Authorised Representative The instructions issued by an authorised representative of the Constituent shall be binding on the Constituent in accordance with the letter authorising the said representative to deal on behalf of the Constituent.

viii) Death or Insolvency In the event of death or insolvency of the Constituent or of its otherwise becoming incapable of receiving and/or paying for or delivering or transferring securities which the Constituent has ordered to be bought or sold, the Member may close out the transaction of the Constituent and the Constituent or its legal representative/s or nominee/s shall be liable jointly or severally for any losses, costs and be entitled to any surplus which may result there from.`,
  },

  {
    label: "Dispute Resolution",
    content: `
    (a) The Member and the Constituent are aware of the provisions of the bye laws rules and regulations of the BSE/NSE relating to the resolution of the disputes/differences through the mechanism of arbitration provided by the Exchanges and agree to abide by the said provisions insofar as any disputes under these Terms relate to transactions that are to be carried out on the exchanges.

(b) In so far as any other disputes or differences in connection with these Terms or their performance (other than the disputes referred to in Paragraph.

(c) ivx (a) above) are concerned such disputes shall, so far as it is possible, be settled amicably between the Parties and in the case where after 30 days of consultation, the parties have failed to reach an amicable settlement, such disputes shall be submitted to arbitration and such arbitration shall be conducted in accordance with the Indian Arbitration and Conciliation Act, 1996 (the “Arbitration Act”) by an panel consisting of a sole arbitrator. The Member and the Constituent expressly consent and agree that the Chairman, shall be the persona designate to appoint the dais sole arbitrator. The venue of arbitration shall be Delhi and each party shall bear the cost of arbitration equally unless otherwise awarded by the sole arbitrator. (c) The member maintains offices at different places within the knowledge of the Constituent and the Constituent shall have all transaction with the principle office, but they may also avail facility at its branches as well. Branch Managers shall also have the power to recover payments or make the payments on behalf of the principles to such Constituents after obtaining the instruction in this behalf and may give acknowledgement of such transaction on behalf of the head office. However all transaction may be entered at branches shall be treated as transaction being done with the principle office and all information shall remain with the Member at New Delhi.

(d) xv Foreign Jurisdiction This service does not constitute an offer to sell or a solicitation of an offer to buy any shares, securities or other instruments to any person in any jurisdiction where it is unlawful to make such an offer or solicitation. This service is not intended to be any form of an investment advertisement, investment advice or investment information and has not been registered under any securities law of any foreign jurisdiction and is only for the information of any person in any jurisdiction where it may be lawful to offer such a service. Further, no information on the Web Site is to be construed as a representation with respect to shares, securities or other investments regarding the legality of an investment therein under the respective applicable investment or similar laws or regulations of any person or entity accessing the Web Site. VII.xvi General (a) Notwithstanding anything contained in these Terms or in the Member-Constituent Agreement, Member retains its right to: (i) In its sole discretion to alter, limit or discontinue the Website or any Material/s in any respect. JBV Share Broker And Fintech Pvt. Ltd. shall have no obligation to take the needs of any user into consideration in connection therewith. (ii) Deny in its sole discretion any user access to this Website or any portion thereof without notice. (b) No waiver by of any provision of this Agreement shall be binding except as set forth in writing signed by its duly authorised representative.`,
  },
];

const slugify = (label) =>
  label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const toParagraphs = (text) =>
  text
    .trim()
    .split(/\n\s*\n/)
    .map((block, idx) => (
      <p key={idx}>
        {block.split(/\n/).map((line, lineIdx, arr) => (
          <React.Fragment key={lineIdx}>
            {line}
            {lineIdx < arr.length - 1 ? <br /> : null}
          </React.Fragment>
        ))}
      </p>
    ));

export default function Terms() {
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef(null);
  const contentRef = useRef(null);

  const tabs = useMemo(
    () =>
      TAB_DATA.map((tab, index) => ({
        ...tab,
        id: `terms-section-${index}`,
      })),
    []
  );

  const hasTabs = tabs.length > 0;
  const safeIndex = hasTabs ? Math.min(activeIndex, tabs.length - 1) : 0;
  const activeTab = hasTabs ? tabs[safeIndex] : null;

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [safeIndex]);

  const focusButtonAt = (position) => {
    const buttons = listRef.current?.querySelectorAll('button');
    if (!buttons || !buttons.length) {
      return;
    }
    const normalized = (position + buttons.length) % buttons.length;
    const target = buttons[normalized];
    if (target) {
      target.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        focusButtonAt(index - 1);
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        focusButtonAt(index + 1);
        break;
      case 'Home':
        event.preventDefault();
        focusButtonAt(0);
        break;
      case 'End':
        event.preventDefault();
        focusButtonAt(tabs.length - 1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        setActiveIndex(index);
        break;
      default:
        break;
    }
  };

  if (!activeTab) {
    return null;
  }

  return (
    <section className="terms-shell" aria-labelledby="terms-heading">
      <div className="terms-shell__inner">
        <header className="terms-hero">
          <p className="terms-hero__eyebrow">Legal &amp; Compliance</p>
          <h1 id="terms-heading">Terms &amp; Conditions</h1>
          <p className="terms-hero__lede">
            Review the sections on the left to understand the policies that govern our services. Select a topic to see the full text on the right.
          </p>
        </header>

        <div className="terms-layout">
          <nav className="terms-nav" aria-label="Terms sections">
            <ul ref={listRef} role="tablist">
              {tabs.map((tab, index) => {
                const isActive = index === safeIndex;
                return (
                  <li key={tab.id}>
                    <button
                      type="button"
                      className={`terms-nav__btn${isActive ? ' is-active' : ''}`}
                      aria-current={isActive ? 'true' : undefined}
                      aria-selected={isActive}
                      onClick={() => setActiveIndex(index)}
                      onKeyDown={(event) => handleKeyDown(event, index)}
                    >
                      <span>{tab.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <article
            className="terms-content"
            aria-live="polite"
            aria-labelledby={`terms-panel-title-${safeIndex}`}
          >
            <div className="terms-content__heading">
              <p className="terms-content__tag">Section {safeIndex + 1}</p>
              <h2 id={`terms-panel-title-${safeIndex}`}>{activeTab.label}</h2>
            </div>
            <div className="terms-content__body" ref={contentRef}>
              <div className="terms-content__text">{activeTab.content}</div>
            </div>
          </article>
        </div>
      </div>

      <style>{`
        .terms-shell {
          background: #f6f8fb;
          padding: clamp(32px, 6vw, 72px) 0;
        }

        .terms-shell__inner {
          width: min(1200px, 92vw);
          margin: 0 auto;
        }

        .terms-hero {
          max-width: 720px;
          margin-bottom: clamp(24px, 4vw, 40px);
        }

        .terms-hero__eyebrow {
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1f3c88;
          margin-bottom: 8px;
        }

        .terms-hero h1 {
          margin: 0 0 12px;
          font-size: clamp(2rem, 5vw, 2.8rem);
          color: #0b1f33;
        }

        .terms-hero__lede {
          margin: 0;
          color: #4a5876;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .terms-layout {
          display: grid;
          grid-template-columns: minmax(220px, 320px) minmax(0, 1fr);
          gap: clamp(16px, 3vw, 40px);
          align-items: stretch;
        }

        .terms-nav ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .terms-nav__btn {
          width: 100%;
          text-align: left;
          border: 1px solid transparent;
          border-radius: 14px;
          padding: 14px 18px;
          font-size: 0.98rem;
          font-weight: 600;
          color: #1c2a44;
          background: rgba(255, 255, 255, 0.8);
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }

        .terms-nav__btn:hover,
        .terms-nav__btn:focus-visible {
          border-color: rgba(8, 142, 217, 0.35);
          outline: none;
          background: #ffffff;
        }

        .terms-nav__btn.is-active {
          border-color: rgba(8, 142, 217, 0.9);
          background: #0b5ed7;
          color: #fff;
          box-shadow: 0 12px 24px rgba(13, 74, 150, 0.2);
        }

        .terms-content {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 24px 40px rgba(15, 23, 42, 0.08);
          padding: clamp(20px, 4vw, 36px);
          display: flex;
          flex-direction: column;
          min-height: 420px;
        }

        .terms-content__heading {
          margin-bottom: 18px;
        }

        .terms-content__tag {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.78rem;
          color: #5f6c81;
        }

        .terms-content h2 {
          margin: 6px 0 0;
          font-size: clamp(1.3rem, 3vw, 2rem);
          color: #0b1f33;
        }

        .terms-content__body {
          flex: 1 1 auto;
          overflow-y: auto;
          padding-right: 6px;
        }

        .terms-content__text {
          white-space: pre-line;
          line-height: 1.75;
          font-size: 1rem;
          color: #1d2942;
        }

        @media (max-width: 980px) {
          .terms-layout {
            grid-template-columns: 1fr;
          }

          .terms-nav ul {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 6px;
          }

          .terms-nav__btn {
            min-width: 200px;
          }
        }

        @media (max-width: 600px) {
          .terms-nav__btn {
            font-size: 0.9rem;
            padding: 12px 14px;
          }

          .terms-content {
            border-radius: 18px;
          }
        }
      `}</style>
    </section>
  );
}
