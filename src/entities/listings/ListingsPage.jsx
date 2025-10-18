import React from "react";
import { useQuery } from "@tanstack/react-query";
import ListingCard from "./ListingCard";
import { Row, Col, Spin, Alert, Button } from "antd";
import { useUIStore } from "../../shared/store/useUIStore";
import { api } from "../../api";

export default function ListingsPage() {
  const filters = useUIStore((s) => s.filters);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["listings", filters],
    queryFn: async () => {
      const res = await api.get("/listings", { params: filters });
      return res.data;
    },
    keepPreviousData: true,
  });

  if (isLoading) return <Spin tip="Загрузка..." className="mt-10" />;
  if (isError)
    return (
      <Alert
        message="Ошибка загрузки"
        description={<Button onClick={refetch}>Повторить</Button>}
        type="error"
        showIcon
      />
    );

  return (
    <Row gutter={[16, 16]} className="p-4">
      {data.map((listing) => (
        <Col key={listing.id} xs={24} sm={12} lg={8}>
          <ListingCard listing={listing} />
        </Col>
      ))}
    </Row>
  );
}
