package com.laioffer.twitch.db;

// imports...

import com.laioffer.twitch.db.entity.ItemEntity;
import org.springframework.data.repository.ListCrudRepository;

public interface ItemRepository extends ListCrudRepository<ItemEntity, Long> {

    ItemEntity findByTwitchId(String twitchId);
}