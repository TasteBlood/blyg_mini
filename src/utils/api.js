import { get, post } from './http';

/**
 * 获取商品分类
 */
export const getCategory = async () => {
    try {
        return await get('/base/selectAllCategory',{},false)        
    } catch (error) {
        return error
    }
};

/**
 * 查询全部的单位
 */
export const getUnit = async () => {
    try {
        return await get('/base/selectAllUnit',{},false)        
    } catch (error) {
        return error
    }
};

/**
 * 查询全部的品牌
 */
export const getBrands = async () => {
    try {
        return await get('/base/selectAllBrand',{},false)        
    } catch (error) {
        return error
    }
};

/**
 * 添加品牌
 * @param {String} name 品牌名
 */
export const addBrands = async (name) =>{
    try {
        return await post('/base/addBrand',{name},true)        
    } catch (error) {
        return error
    }
};

/**
 * @param {String} barCode 根据条码查询商品是否存在 
 */
export const findGoods = async (barCode) => {
    try {
        return await post('/base/findGoods',{barCode},true)
    } catch (error) {
        return error;
    }
};

/**
 * 查询商品信息
 * @param {String} barCode 条码信息 
 */
export const getGoodsInfo = async (barCode) => {
    try {
        return await post('/base/queryGoods',{appKey:'6c0bec23f4a1cdc38f1893bd4836bc1e',barCode},true)        
    } catch (error) {
        return error
    }
};

/**
 * @param {String} name 商品名称
 * @param {String} barCode 条形码
 * @param {String} brandId 品牌id
 * @param {String} categoryOneId 一级分类id
 * @param {String} categoryTwoId 二级分类id
 * @param {String} specName 规格名称
 * @param {String} price 零售价
 */
export const addGoods = async (name,barCode,brandId,categoryOneId,categoryTwoId,unit,unitName,specName,price) => {
    try {
        return await post('/base/addBaseGoods',{name,barCode,brandId,categoryOneId,categoryTwoId,unit,unitName,specName,price},true)        
    } catch (error) {
        return error
    }
};