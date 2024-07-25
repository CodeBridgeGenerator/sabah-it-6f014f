import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import initilization from "../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
      if (Object.hasOwnProperty.call(errorObj.errors, key)) {
        const element = errorObj.errors[key];
        if (element?.message) {
          errMsg[key] = element.message;
        }
      }
    }
    return errMsg.length ? errMsg : errorObj.message ? { error : errorObj.message} : {};
};

const InventoryCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        let init  = {};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [], setError);
        }
        set_entity({...init});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
        
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            itemid: _entity?.itemid,itemname: _entity?.itemname,category: _entity?.category,unitofmeasure: _entity?.unitofmeasure,quantityonhand: _entity?.quantityonhand,minimumstocklevel: _entity?.minimumstocklevel,maximumstocklevel: _entity?.maximumstocklevel,reorderpoint: _entity?.reorderpoint,supplier: _entity?.supplier,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("inventory").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Inventory created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Inventory" });
        }
        setLoading(false);
    };

    

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    

    return (
        <Dialog header="Create Inventory" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="inventory-create-dialog-component">
            <div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="itemid">Itemid:</label>
                <InputText id="itemid" className="w-full mb-3 p-inputtext-sm" value={_entity?.itemid} onChange={(e) => setValByKey("itemid", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["itemid"]) ? (
              <p className="m-0" key="error-itemid">
                {error["itemid"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="itemname">Itemname:</label>
                <InputText id="itemname" className="w-full mb-3 p-inputtext-sm" value={_entity?.itemname} onChange={(e) => setValByKey("itemname", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["itemname"]) ? (
              <p className="m-0" key="error-itemname">
                {error["itemname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="category">Category:</label>
                <InputText id="category" className="w-full mb-3 p-inputtext-sm" value={_entity?.category} onChange={(e) => setValByKey("category", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["category"]) ? (
              <p className="m-0" key="error-category">
                {error["category"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="unitofmeasure">Unitofmeasure:</label>
                <InputText id="unitofmeasure" className="w-full mb-3 p-inputtext-sm" value={_entity?.unitofmeasure} onChange={(e) => setValByKey("unitofmeasure", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["unitofmeasure"]) ? (
              <p className="m-0" key="error-unitofmeasure">
                {error["unitofmeasure"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="quantityonhand">Quantityonhand:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["quantityonhand"]) ? (
              <p className="m-0" key="error-quantityonhand">
                {error["quantityonhand"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="minimumstocklevel">Minimumstocklevel:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["minimumstocklevel"]) ? (
              <p className="m-0" key="error-minimumstocklevel">
                {error["minimumstocklevel"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="maximumstocklevel">Maximumstocklevel:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["maximumstocklevel"]) ? (
              <p className="m-0" key="error-maximumstocklevel">
                {error["maximumstocklevel"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="reorderpoint">Reorderpoint:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["reorderpoint"]) ? (
              <p className="m-0" key="error-reorderpoint">
                {error["reorderpoint"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplier">Supplier:</label>
                <InputText id="supplier" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplier} onChange={(e) => setValByKey("supplier", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplier"]) ? (
              <p className="m-0" key="error-supplier">
                {error["supplier"]}
              </p>
            ) : null}
          </small>
            </div>
            <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(InventoryCreateDialogComponent);
