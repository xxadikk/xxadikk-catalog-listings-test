import React from "react";
import { Card, Button } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useUIStore } from "@/shared/store/useUIStore";

export default function ListingCard({ listing }) {
  const toggleFavorite = useUIStore((s) => s.toggleFavorite);
  const favorites = useUIStore((s) => s.favorites);
  const fav = favorites[listing.id];

  return (
    <Card
      hoverable
      cover={<img alt={listing.title} src={listing.thumbnailUrl} />}
      actions={[
        <Button type="text" onClick={() => toggleFavorite(listing.id)}>
          {fav ? <HeartFilled style={{ color: "red" }} /> : <HeartOutlined />}
        </Button>,
      ]}
    >
      <Card.Meta
        title={listing.title}
        description={
          <>
            <p>{listing.city}</p>
            <p>${listing.pricePerNight}/ночь</p>
          </>
        }
      />
    </Card>
  );
}
