"use client";

import { useState } from "react";
import { Suspense } from "react";
import Loading from "@/app/loading";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import Chip from "@mui/material/Chip";
import SearchIcon from "@mui/icons-material/Search";
import { categories, subCategories, vouchers } from "@/app/_constants/enum";
import { CardCustom } from "../_components/card";

export default function Page() {
  const [objCategories, setObjCategories] = useState(categories);
  const [objSubCategories, setObjSubCategories] = useState(subCategories);
  const [objVouchers, setObjVouchers] = useState(vouchers);
  const [inputValue, setInputValue] = useState("");

  const handleCategory = (id, category) => {
    const filterCategories = objCategories.map((element) => {
      element.id === id ? (element.status = true) : (element.status = false);

      return element;
    });
    setObjCategories(filterCategories);

    const filterSubCtegories = subCategories.filter((item) => {
      item.status = false;
      return item.category === category;
    });
    setObjSubCategories(id === 1 ? subCategories : filterSubCtegories);

    const filterVoucher = vouchers.filter((item) => item.category === category);
    setObjVouchers(id === 1 ? vouchers : filterVoucher);
  };

  const handleSubCategory = (id, subCategory, Category, isDelete) => {
    if (isDelete) {
      const filterAllCategories = categories.filter((element) => {
        element.id === 1 ? (element.status = true) : (element.status = false);
        return element;
      });

      const filterSubCategories = subCategories.filter((element) => {
        element.name === subCategory && element.status === false
          ? (element.status = true)
          : (element.status = false);
        return element;
      });

      setObjCategories(filterAllCategories);
      setObjSubCategories(filterSubCategories);
      setObjVouchers(vouchers);
    } else {
      const filter = objSubCategories.map((element) => {
        element.id === id && element.status === false
          ? (element.status = true)
          : (element.status = false);
        return element;
      });
      setObjSubCategories(filter);

      const filterVoucher = vouchers.filter(
        (item) => item.subCategory === subCategory
      );
      setObjVouchers(filterVoucher);

      const filterCategories = objCategories.map((element) => {
        element.name === Category
          ? (element.status = true)
          : (element.status = false);
        return element;
      });
      setObjCategories(filterCategories);
    }
  };

  const handleSearch = (company) => {
    const filterSearch = vouchers.filter(
      (element) => element.company === company
    );
    setObjVouchers(company ? filterSearch : vouchers);
  };

  return (
    <>
      <Suspense fallback={Loading}>
        <div className="searchInput">
          <Autocomplete
            freeSolo
            id="search"
            disableClearable
            options={vouchers.map((option) => option.company)}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
              handleSearch(newInputValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Pesquisar"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div>
        <h1>Estabelecimentos / Vouchers</h1>
        <div className="wrapFlex">
          {objCategories.map((item, index) => {
            return (
              <Chip
                key={index}
                label={item.name}
                variant={item.status ? "standart" : "outlined"}
                onClick={() => handleCategory(item.id, item.name)}
                color="primary"
              />
            );
          })}
        </div>

        <div className="wrapFlex">
          {objSubCategories.map((item, index) => {
            if (item.status) {
              return (
                <Chip
                  key={index}
                  size="small"
                  label={item.name}
                  variant={item.status ? "standart" : "outlined"}
                  onClick={() =>
                    handleSubCategory(item.id, item.name, item.category, false)
                  }
                  onDelete={() =>
                    handleSubCategory(item.id, item.name, item.category, true)
                  }
                  color="primary"
                />
              );
            } else {
              return (
                <Chip
                  key={index}
                  size="small"
                  label={item.name}
                  variant={item.status ? "standart" : "outlined"}
                  onClick={() =>
                    handleSubCategory(item.id, item.name, item.category, false)
                  }
                  color="primary"
                />
              );
            }
          })}
        </div>

        <div className="wrapFlex gap16">
          {objVouchers.length > 0 ? (
            objVouchers.map((voucher) => (
              <CardCustom key={voucher.id} obj={voucher} />
            ))
          ) : (
            <p>Voucher não encontrado</p>
          )}
        </div>
      </Suspense>
    </>
  );
}
