import { StateDocumentModel } from "../confirm-package/state-document.model";

export class DocumentRequestModel {
  id?: number;
  state?: StateDocumentModel;
  documentType?: any;
  documentNumber?: string;
  documentAmount?: string;
  documentDate?: string;
  registerDate?: string;
  branchId?: string;
  documentBranchCode?: any;
  requestDescription?: string;
  requestType?: any;
  customerNumber?: string;
  fileNumber?: string;
  documentSetId?: number;
  type?: any;
  viewValidateDate?: any;
  registrarName?: string;
  confirmerName?: string;
  branchFileUuid?: string;
  officeFileUuid?: string;
  lastState?: any;
  expiryDate?: any;
  receiveDescription?: string;
  officeFiles?: any;
  DocumentRequestReasonId?: string;
  checkReceiptDateFrom?: string;
  checkReceiptDateTo?: string;
  referenceTitle?: string;
  documentDateTo?: string;
  documentDateFrom?: string;
  fileTitle?: string;
  documentRequestReasonId?: string;
  checkNumber?: string;
  checkReceiptDate?: string;
  checkIssuingBank?: string;
  checkDate?: string;
  fileDate?: string;
  fileDateFrom?: string;
  fileDateTo?: string;
  documentBranchName?: string;
  documentRequestReasonTitle?: string;
}
