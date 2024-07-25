import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState, useRef } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { useParams } from "react-router-dom";
import moment from "moment";
import UploadService from "../../services/uploadService";
import { InputText } from 'primereact/inputtext';
import { Dialog } from "primereact/dialog";
import { MultiSelect } from "primereact/multiselect";
import DownloadCSV from "../../utils/DownloadCSV";

const PersonalDataTable = ({ items, fields, onEditRow, onRowDelete, onRowClick, searchDialog, setSearchDialog,   showUpload, setShowUpload,
    showFilter, setShowFilter,
    showColumns, setShowColumns, onClickSaveFilteredfields ,
    selectedFilterFields, setSelectedFilterFields,
    selectedHideFields, setSelectedHideFields, onClickSaveHiddenfields, loading}) => {
    const dt = useRef(null);
    const urlParams = useParams();
    const [globalFilter, setGlobalFilter] = useState('');

const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.name}</p>
const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.employeeid}</p>
const p_dateTemplate2 = (rowData, { rowIndex }) => <p >{(new Date(rowData.dob)).toLocaleDateString()}</p>
const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.gender}</p>
const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.phone}</p>
const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.email}</p>
const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.address}</p>
const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.employment}</p>
const p_dateTemplate8 = (rowData, { rowIndex }) => <p >{(new Date(rowData.hire)).toLocaleDateString()}</p>
const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.terminationdate}</p>
const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.title}</p>
const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.department}</p>
    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowData._id)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.createdAt).fromNow()}</p>;
    const pUpdatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.updatedAt).fromNow()}</p>;
    const pCreatedBy = (rowData, { rowIndex }) => <p>{rowData.createdBy?.name}</p>;
    const pUpdatedBy = (rowData, { rowIndex }) => <p>{rowData.updatedBy?.name}</p>;
    const paginatorLeft = <Button type="button" icon="pi pi-upload" text onClick={() => setShowUpload(true)} disabled={!true}/>;
    const paginatorRight = DownloadCSV({ data : items, fileName : "personal"});
    const exportCSV = () => {dt.current?.exportCSV();};

    return (
        <>
        <DataTable value={items} ref={dt} removableSort onRowClick={onRowClick} scrollable rowHover stripedRows paginator rows={10} rowsPerPageOptions={[10, 50, 250, 500]} size={"small"}  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rowClassName="cursor-pointer" alwaysShowPaginator={!urlParams.singleUsersId} loading={loading}>
<Column field="name" header="Name" body={pTemplate0} filter={selectedFilterFields.includes("name")} hidden={selectedHideFields?.includes("name")}  sortable style={{ minWidth: "8rem" }} />
<Column field="employeeid" header="Employeeid" body={pTemplate1} filter={selectedFilterFields.includes("employeeid")} hidden={selectedHideFields?.includes("employeeid")}  sortable style={{ minWidth: "8rem" }} />
<Column field="dob" header="Dob" body={p_dateTemplate2} filter={selectedFilterFields.includes("dob")} hidden={selectedHideFields?.includes("dob")}  sortable style={{ minWidth: "8rem" }} />
<Column field="gender" header="Gender" body={pTemplate3} filter={selectedFilterFields.includes("gender")} hidden={selectedHideFields?.includes("gender")}  sortable style={{ minWidth: "8rem" }} />
<Column field="phone" header="Phone" body={pTemplate4} filter={selectedFilterFields.includes("phone")} hidden={selectedHideFields?.includes("phone")}  sortable style={{ minWidth: "8rem" }} />
<Column field="email" header="Email" body={pTemplate5} filter={selectedFilterFields.includes("email")} hidden={selectedHideFields?.includes("email")}  sortable style={{ minWidth: "8rem" }} />
<Column field="address" header="Address" body={pTemplate6} filter={selectedFilterFields.includes("address")} hidden={selectedHideFields?.includes("address")}  sortable style={{ minWidth: "8rem" }} />
<Column field="employment" header="Employment" body={pTemplate7} filter={selectedFilterFields.includes("employment")} hidden={selectedHideFields?.includes("employment")}  sortable style={{ minWidth: "8rem" }} />
<Column field="hire" header="Hire" body={p_dateTemplate8} filter={selectedFilterFields.includes("hire")} hidden={selectedHideFields?.includes("hire")}  sortable style={{ minWidth: "8rem" }} />
<Column field="terminationdate" header="Terminationdate" body={pTemplate9} filter={selectedFilterFields.includes("terminationdate")} hidden={selectedHideFields?.includes("terminationdate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="title" header="Title" body={pTemplate10} filter={selectedFilterFields.includes("title")} hidden={selectedHideFields?.includes("title")}  sortable style={{ minWidth: "8rem" }} />
<Column field="department" header="Department" body={pTemplate11} filter={selectedFilterFields.includes("department")} hidden={selectedHideFields?.includes("department")}  sortable style={{ minWidth: "8rem" }} />
            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            {/*<Column field="createdAt" header="created" body={pCreatedAt} sortable style={{ minWidth: "8rem" }} />*/}
            {/*<Column field="updatedAt" header="updated" body={pUpdatedAt} sortable style={{ minWidth: "8rem" }} />*/}
            {/*<Column field="createdBy" header="createdBy" body={pCreatedBy} sortable style={{ minWidth: "8rem" }} />*/}
            {/*<Column field="updatedBy" header="updatedBy" body={pUpdatedBy} sortable style={{ minWidth: "8rem" }} />*/}
        </DataTable>
        <Dialog header="Upload Personal Data" visible={showUpload} onHide={() => setShowUpload(false)}>
        <UploadService />
      </Dialog>

      <Dialog header="Search Personal" visible={searchDialog} onHide={() => setSearchDialog(false)}>
      Search
    </Dialog>
    <Dialog
        header="Filter Users"
        visible={showFilter}
        onHide={() => setShowFilter(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedFilterFields}
            onChange={(e) => setSelectedFilterFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedFilterFields);
            onClickSaveFilteredfields(selectedFilterFields);
            setSelectedFilterFields(selectedFilterFields);
            setShowFilter(false)
          }}
        ></Button>
      </Dialog>

      <Dialog
        header="Hide Columns"
        visible={showColumns}
        onHide={() => setShowColumns(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedHideFields}
            onChange={(e) => setSelectedHideFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedHideFields);
            onClickSaveHiddenfields(selectedHideFields);
            setSelectedHideFields(selectedHideFields);
            setShowColumns(false)
          }}
        ></Button>
      </Dialog>
        </>
    );
};

export default PersonalDataTable;