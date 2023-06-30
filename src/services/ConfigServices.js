import React, { useState } from "react";
import axios from "axios";
import baseUrl from "src/config/Url";

const config = {
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzlkODhmMmUxMjM1ZGNjNDllMTdhNWI1NWJmNzMyYTIzMTQxYzY5YjYzN2YwNGVlNzg2YzUzNTA3MjlhNTA1NmRmNjAxNDIwNmIyOTE2YjIiLCJpYXQiOjE2NzEzMTk3NjcuNjUyNDY5LCJuYmYiOjE2NzEzMTk3NjcuNjUyNDczLCJleHAiOjE3MDI4NTU3NjcuNjQ4MjIxLCJzdWIiOiIxMiIsInNjb3BlcyI6W119.OyLsnERUt-SdigsyOgR1ifwYEqGGV5Ob0f8KpbxZbssONPymwyV6gID-1F__ejyZ1yfmcX8ueYWwuJiHj3OWrc7FE0t-jHl7B2oQg_csBemzdEVSmH8JoqXTFst7RljFY0T5KUanUVZRVcPnjr_a0gexbfFs_o-5gJnluAhQRrbTPifoP1ggzEvw65-KyqhxKBuY2wACXS7Mn2zamN1uW-HrY5THceFkEjnELhWAwJ1MzGCT1yD84NtDNuqOjZFg4C93yr9XxKK4TOyfJnDV_8XJCSkSwv1xxsoS3oI1HDYaOnxIjnBk1V3bVRhAJ4nJ3zH__dAfGLXJAm9NWrB0vpxjDn6Nn8GcSu5slf9MuK9ZkZshpXYSBTKGx-jau33BRIQG5OCCxIdmKXDFwJsPbw7IlgQ56l6YjrA7Ghq2Z7ypuqnf2Y0l_jMyxvr2hAg6u4yQso43grBh9mN9trh6o5Y_TwChJR2SKQh2q4IssHbyHD5C1H6NgD5P2XPyPI3VJ2fdLX_j6hTQonD-oTULc6K6Yh1hZmQv1cvZygsc9lEqezSiQLg1AHPfuzCg-z7AQvaiTSdigo0988JGBfRp9E_oRqrBJDua1u6spO0DhQqRNNd0IkWamb9-jENIa5wfX-bTB3JcFL_vrJD6ORHqjbskys5uZWHU6bxlnzMKPxM`,
  },
};

export class ConfigServices {
  async add(data) {
    const res = await axios.post(`${baseUrl}/config`, data, config);
    return res.data;
  }

  //   async getAll() {
  //     const res = await axios.get(`${baseUrl}/certificate`);
  //     return res.data;
  //   }

  async getAllByName(name) {
    const res = await axios.get(
      `${baseUrl}/config?column=name&keyword=%25${name}%25`
    );
    return res.data;
  }

  //   async getOne(value) {
  //     const res = await axios.get(`${baseUrl}/certificate/${value}`);
  //     return res.data;
  //   }

  async delete(name) {
    const res = await axios.delete(`${baseUrl}/config/${name}`);
    return res.data;
  }

  //   async update(id, data) {
  //     const res = await axios.put(`${baseUrl}/certificate/update`, {
  //       _id: id,
  //       data: data,
  //     });
  //     return res.data;
  //   }
}
